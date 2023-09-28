import './NotFound.css'

function NotFound(
  {
    onGoBack,
  }
  ) {
  return (
    <main
      className={'notfound'}
    >
      <div
        className={'notfound__content'}
      >
        <h1
          className={'notfound__title'}
        >
          404
        </h1>
        <p
          className={'notfound__description'}
        >
          Страница не найдена
        </p>
        <button
          className={'notfound__go-back-button'}
          onClick={onGoBack}
          type={'button'}
        >
          Назад
        </button>
      </div>
    </main>
  )
}

export default NotFound