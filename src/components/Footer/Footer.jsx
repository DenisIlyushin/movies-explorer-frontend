import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <h2
        className={'footer__title'}
      >
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div
        className={'footer__content'}
      >
        <p
          className={'footer__copyright'}
        >
          &copy; {currentYear}
        </p>
        <div
          className={'footer__links'}
        >
          <a
            className={'footer__link'}
            href={'https://practicum.yandex.ru'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Яндекс.Практикум
          </a>
          <a
            className={'footer__link'}
            href={'https://github.com/DenisIlyushin/movies-explorer-frontend'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
