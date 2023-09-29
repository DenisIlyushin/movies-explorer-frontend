import './AboutProject.css'

function AboutProject() {
  return (
    <section
      className={'about-project'}
      id={'about-project'}
    >
      <div
        className={'about-project__content'}
      >
        <h2
          className={'about-project__title'}
        >
          О проекте
        </h2>
        <ul className={'about-project__statements'}>
          <li
            className={'about-project__statement'}
          >
            <h3
              className={'about-project__statement-title'}
            >
              Дипломный проект включал 5&nbsp;этапов
            </h3>
            <p
              className={'about-project__statement-text'}
            >
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li
            className={'about-project__statement'}
          >
            <h3
              className={'about-project__statement-title'}
            >
              На выполнение диплома ушло 5&nbsp;недель
            </h3>
            <p
              className={'about-project__statement-text'}
            >
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
              было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul
          className={'about-project__steps'}
        >
          <li
            className={'about-project__step'}
          >
            <h3
              className={'about-project__step-title about-project__step-title_theme-highlight'}
            >
              1 неделя
            </h3>
            <p
              className={'about-project__step-description'}
            >
              Back-end
            </p>
          </li>
          <li
            className={'about-project__step'}
          >
            <h3 className={'about-project__step-title'}
            >
              4 недели
            </h3>
            <p
              className={'about-project__step-description'}
            >
              Front-end
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject