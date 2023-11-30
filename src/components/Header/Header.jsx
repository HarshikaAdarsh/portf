

// ... (import statements)

import { useContext, useEffect, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';

import NavMenu from '../NavMenu/NavMenu';
import ToggleDark from '../ui/ToggleDark';

import CustomLink from '../ui/CustomLink/CustomLink';

import gaEvents from '../../utils/events';
import Button from '../ui/Button/Button';
import Title from '../ui/Title/Title';
import './Header.scss';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleThemeChange = (evt) => {
      const colorScheme = evt.matches ? themes.dark : themes.light;
      setDarkMode((prevDarkMode) => {
        if ((prevDarkMode !== colorScheme) === themes.dark) {
          changeTheme(colorScheme);
          localStorage.setItem('theme', colorScheme);
        }
        return colorScheme === themes.dark;
      });
    };

    if (
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.getItem('theme') === 'dark'
    ) {
      setDarkMode((prevDarkMode) => {
        if (!prevDarkMode) {
          changeTheme(themes.dark);
        }
        return !prevDarkMode;
      });
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleThemeChange);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleThemeChange);
    };
  }, [changeTheme]);

  return (
    <header className="header center">
      <Title className="header__logo" Tag="h3">
        <CustomLink path="https://github.com/HarshikaAdarsh">HⱯ</CustomLink>
      </Title>

      <NavMenu isNavExpanded={isNavExpanded}>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <ToggleDark
              toggleDark={() => {
                setDarkMode((prevDarkMode) => {
                  const currentTheme = prevDarkMode ? themes.light : themes.dark;
                  if ((prevDarkMode !== currentTheme ) === themes.dark) {
                    changeTheme(currentTheme);
                    localStorage.setItem('theme', currentTheme);
                    gaEvents.eventClickChangeTheme();
                  }
                  return !prevDarkMode;
                });
              }}
              isDarkMode={darkMode}
            />
          )}
        </ThemeContext.Consumer>

        <Button
          aria-label="toggle navigation"
          className="button_type_icon nav__hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            gaEvents.eventClickBurgerMenu();
          }}
        >
          <i
            aria-hidden="true"
            className={`fas ${isNavExpanded ? 'fa-times' : 'fa-bars'}`}
          />
        </Button>
      </NavMenu>
    </header>
  );
}

export default Header;
