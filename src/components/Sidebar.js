import React, { useEffect } from "react";
import "@styles/components/_sidebar.scss";
import { useRecoilState } from "recoil";
import { sidebarState } from "@state/sidebarState";
import Toggle from "@components/Toggle";
import {
  colorModeState,
  darkModeState,
  keyboardModeState,
} from "@state/themeState";
import { useLanguage } from "@contexts/LanguageContext";

function Sidebar() {
  const { lang } = useLanguage();

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);

  const handleCloseClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // darkmode
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // colormode
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  const handleColorModeToggle = () => {
    setColorMode(!colorMode);
  };

  useEffect(() => {
    if (colorMode) {
      document.body.classList.add("color-mode");
    } else {
      document.body.classList.remove("color-mode");
    }
  }, [colorMode]);

  // keyboardmode
  const [keyboardMode, setKeyboardMode] = useRecoilState(keyboardModeState);

  const handleKeyboardModeToggle = () => {
    setKeyboardMode(!keyboardMode);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-right">
        <div className="sidebar-content">
          <div className="close--btn" onClick={handleCloseClick}>
            &times;
          </div>
          <div className="sidebar-title">{lang.setting}</div>
          <Toggle
            title={lang.settings.dark}
            description=""
            isOn={darkMode}
            onChange={handleDarkModeToggle}
          />
          <hr />
          <Toggle
            title={lang.settings.color}
            description={lang.settings.color_desc}
            isOn={colorMode}
            onChange={handleColorModeToggle}
          />
          <hr />
          <Toggle
            title={lang.settings.keyboard}
            description={lang.settings.keyboard_desc}
            isOn={keyboardMode}
            onChange={handleKeyboardModeToggle}
          />
          <hr />
          <div className="sidebar-option">
            <span className="option-title">{lang.report}</span>
            <a
              href="https://github.com/hwahyeon/reactjs-wordle-kor/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang.link}
            </a>
          </div>
          <span>{lang.report_desc}</span>
          <hr />
          <div className="sidebar-option">
            <span className="option-title">{lang.original}</span>
            <a
              href="https://www.nytimes.com/games/wordle/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang.link}
            </a>
          </div>
          <span>{lang.original_desc}</span>
        </div>
      </div>
      <div className="sidebar-left" onClick={handleCloseClick}></div>
    </div>
  );
}

export default Sidebar;
