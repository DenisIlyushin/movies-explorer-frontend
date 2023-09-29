import './Portfolio.css'
import nav from '../../images/portfolio_nav.svg'
import {Link} from 'react-router-dom';

function Portfolio() {
  return (
    <section
      className={'portfolio'}
      id={'protfolio'}
    >
      <div
        className={'portfolio__content'}
      >
        <h2
          className={'portfolio__title'}
        >
          Портфолио
        </h2>
        <ul
          className={'portfolio__list'}
        >
          <li
            className={'portfolio__item'}
          >
            <Link
              className={'portfolio__item-link'}
              to={'https://denisilyushin.github.io/how-to-learn'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Статичный сайт
            </Link>
          </li>
          <li className={'portfolio__item'}>
            <Link
              className={'portfolio__item-link'}
              to={'https://denisilyushin.github.io/russian-travel/'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Адаптивный сайт
            </Link>
          </li>
          <li className={'portfolio__item'}>
            <Link
              className={'portfolio__item-link'}
              to={'https://denisilyushin.github.io/react-mesto-auth'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio