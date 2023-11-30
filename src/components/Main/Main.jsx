import Pdf from  "../cv/Harshika_CV.pdf";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import CustomLink from '../ui/CustomLink/CustomLink';
import Section from '../ui/Section/Section';
import Title from '../ui/Title/Title';

import './Main.scss';

import {
  CARD_BREAKPOINT,
  CARD_COUNT,
  PROJECTS,
  SKILLS,
} from '../../utils/constants';

import useCardCount from '../../hooks/useCardCount';
import gaEvents from '../../utils/events';

function Main({ showAlert }) {
  const { t } = useTranslation();

  const [displayedProjects, setDisplayedProjects] = useState([]);

  const { countAddCards, startCountCards, setParamsCountCards } = useCardCount(
    CARD_COUNT,
    CARD_BREAKPOINT
  );

  useEffect(() => {
    setParamsCountCards('all');
    window.addEventListener('resize', setParamsCountCards);
    return () => window.removeEventListener('resize', setParamsCountCards);
  }, [setParamsCountCards]);

  useEffect(() => {
    setDisplayedProjects(PROJECTS.slice(0, startCountCards));
  }, [startCountCards]);

  const showMoreProjects = () => {
    const startIndex = displayedProjects.length;
    const endIndex = startIndex + countAddCards;

    setDisplayedProjects([
      ...displayedProjects,
      ...PROJECTS.slice(startIndex, endIndex),
    ]);

    gaEvents.eventClickShowProjects();
  };

  return (
    <main className="content">
      <Section className="about center">
        <Title Tag="h1" className="about__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hi, I am <span class="about__name">Harshika Adarsh</span>.`
                )
                .start();
            }}
          />
        </Title>
        <Title className="about__role">{t('about__role')}</Title>
        <p className="about__description">
          Enter my productivity Zone.
          <br/>
          I`m a Web Developer specializing in building (sometimes designing) web
          platforms and applications.
          <br />
          Harshika, a 21 years old girl, overfilled with enthusiasm & craving for success. 
          <br/>

          I am a keen and resourceful full-stack developer 
          <br/>
          who believes that the answer to every question in this world is present in the nature around us.
          <br/>
           All we have to do is take the initiative to match them up.
        </p>

        <div className="about__contact center">
          <a
            href={require('../cv/Harshika_CV.pdf')}
            aria-label="resume"
            target="_blank"
            rel="noreferrer"
            onClick={() => gaEvents.eventClickDownloadCV()}
          >
            <span className="button button_type_outline">Harshika_CV.pdf</span>
          </a>
          <CustomLink
            path="https://github.com/HarshikaAdarsh"
            className="link_type_icon"
            aria-label="github"
          >
            <i
              aria-hidden="true"
              className="fab fa-github"
              onClick={() => gaEvents.eventClickGitHub()}
            />
          </CustomLink>
          <CustomLink
            path="https://www.linkedin.com/in/harshika-adarsh-702060222/"
            className="link_type_icon"
            aria-label="linkedin"
            onClick={() => gaEvents.eventClickLinkedIn()}
          >
            <i aria-hidden="true" className="fab fa-linkedin" />
          </CustomLink>
        </div>
      </Section>

      <Section className="projects" id="projects">
        <Title className="projects__title">Projects</Title>
        <Projects
          cards={displayedProjects}
          allProjects={PROJECTS.length}
          displayedProjects={displayedProjects}
          onClick={showMoreProjects}
        />
      </Section>

      <Section className="skills" id="skills">
        <Title className="title skills__title">Skills</Title>
        <Skills items={SKILLS} />
      </Section>

      <Section className="contact center" id="contact">
        <Title className="title contact__title">Contact</Title>
        <a
          href="mailto:harshikaadarsh04@gmail.com"
          onClick={() => {
            navigator.clipboard.writeText('harshikaadarsh04@gmail.com');
            showAlert('email address copied to clipboard');
            gaEvents.eventClickEmailMe();
          }}
        >
          <span className="button button_type_outline">Email me</span>
        </a>
        <ul className="contact__items">
          <li>harshikaadarsh04@gmail.com</li>
          <li>Linkdin: Harshika Adarsh</li>
          <li>twitter: Harshika Adarsh</li>
          
        </ul>
      </Section>
    </main>
  );
}

export default Main;
