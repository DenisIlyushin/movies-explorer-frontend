import './AboutMe.css'
import me from '../../images/me.png'
import {Link} from 'react-router-dom';

function AboutMe() {
  return (
    <section
      className={'about-me'}
      id={'about-me'}
    >
      <div
        className={'about-me__content'}
      >
        <h2
          className={'about-me__title'}
        >
          Студент
        </h2>
        <div
          className={'about-me__info'}
        >
          <p
            className={'about-me__name'}
          >
            Ден Илюшин
          </p>
          <p
            className={'about-me__description'}
          >
            Специалист по информационным технологиям, 36 лет
          </p>
          <p
            className={'about-me__bio'}
          >
            Я&nbsp;родился и&nbsp;живу в&nbsp;Москве. Закончил биологический
            факультет МГУ, после&nbsp;&mdash; аспирантуру в&nbsp;РАН, защитил
            степень кандидата биологических наук. В&nbsp;ИТ&nbsp;занесла нелегкая.
            Курс закончил в&nbsp;рамках самообразования. Среди прочего&nbsp;&mdash;
            фанат типографики.
          </p>
          <Link
            className={'about-me__github-link'}
            to={'https://github.com/DenisIlyushin'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Github
          </Link>
          <img
            className={'about-me__photo'}
            src={me}
            alt={'Портрет'}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe