import React from 'react';
import './footer.scss';
import arrowUp from '../../img/up-arrow.svg';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="contacts_row">
        <p>
          Email : <a href="mailto:vdmitry24@yandex.ru">vdmitry24@yandex.ru</a>
        </p>
        <p>
          Телефон: <a href="tel:89996772414">7-999-677-24-14</a>
        </p>
        <p>Адрес: г. Москва, ст. м Свиблово</p>
      </div>

      <div className="social_row">
        <a
          href="https://vk.com/v__dmitry"
          className="footer_links vk"
          target="blank"
        >
          <span>Вконтакте</span>
        </a>

        <a href="" className="footer_links hh" target="blank">
          <span>hh.ru</span>
        </a>

        <a
          href="https://github.com/dyzz24"
          className="footer_links gh"
          target="blank"
        >
          <svg
            height="32"
            className="octicon octicon-mark-github text-white"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <span>Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BA%D0%BE%D0%B2-a12b98172/"
          className="footer_links ln"
          target="blank"
        >
          <span>Linkedin</span>
        </a>
      </div>

      <img
        className="arrow_up"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        src={arrowUp}
      />
    </footer>
  );
};
