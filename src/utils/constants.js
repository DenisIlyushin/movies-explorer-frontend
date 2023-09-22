const moviesTestStartArray = [
  {
    director: 'Терри Гиллиам',
    duration: '106',
    country: 'Великобритания, Румыния, Франция',
    year: '2013',
    description: 'Эксцентричный компьютерный гений Коэн Лет бьется над неразрешимой ' +
      'теоремой. Благодаря костюму виртуальной реальности, изобретенному мальчиком ' +
      'Бобом, Лету удается совершить путешествие в скрытое пространство и узнать тайну ' +
      'своей души. Эту разгадку ищет не только он сам, но и таинственный Менеджмент, ' +
      'который правит всем миром посредством всевидящих устройств под названием ManCams.',
    image: 'https://www.mirf.ru/wp-content/uploads/2015/11/maxresdefault14.jpg',
    trailerLink: 'https://youtu.be/poH6j9EKQIo',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/5757cea9-a8b6-48f8-b9ce-c233cf6b2970/300x450',
    movieId: '854730',
    nameRu: 'Теорема Hеро',
    nameEN: 'The Zero Theorem'
  },
  {
    director: 'Дэвид Силверман',
    duration: '83',
    country: 'США',
    year: '2007',
    description: 'После того, как Гомер сбросил отходы в водохранилище, Спрингфилд ' +
      'объявили карантинной зоной и накрыли гигантским стеклянным колпаком. Местные ' +
      'жители ополчились на Симпсонов за то, что их отрезали от остального мира.',
    image: 'https://st-gdefon.gallery.world/wallpapers_original/16723_gallery.world.jpg',
    trailerLink: 'https://youtu.be/FuyKbreXQ7A',
    thumbnail: 'https://www.kino-teatr.ru/movie/poster/34828/140023.jpg',
    movieId: '2385934',
    nameRu: 'Симпсоны в кино',
    nameEN: 'The Simpsons Movie'
  },
  {
    director: 'Пегги Холмс, Хавьер Абад',
    duration: '105',
    country: 'США, Испания',
    year: '2022',
    description: 'Выпускница детского дома Сэм больше всего на свете хочет, ' +
      'чтобы её подружке, маленькой Хэйзел, улыбнулась удача, и девочка наконец ' +
      'обрела семью. Сама Сэм везучестью не отличается, но однажды она угощает ' +
      'бродячего кота, находит счастливую монетку, и с этого момента ей начинает ' +
      'сопутствовать удача буквально во всём. Решив отдать монетку Хэйзел, ' +
      'девушка случайно смывает её в унитаз, а когда снова сталкивается с тем ' +
      'котом, понимает, что это не обычное животное. Пытаясь выпросить у котейки ' +
      'новую монетку, Сэм начинает его преследовать и попадает в волшебную Страну ' +
      'Удачи..',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bfeded2-8d0f-40d6-ab0c-b06ea80bca84/300x',
    trailerLink: 'https://www.youtube.com/watch?v=4B_0KRKsDQY',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bfeded2-8d0f-40d6-ab0c-b06ea80bca84/300x',
    movieId: '854730',
    nameRu: 'Удача',
    nameEN: 'Luck'
  },
  {
    director: 'Илья Найшуллер',
    duration: '92',
    country: 'США, Япония',
    year: '2021',
    description: 'Непримечательный и незаметный семьянин Хатч живёт скучной жизнью ' +
      'обычного аудитора, пока однажды в его дом не вламываются грабители. ' +
      'И это бы сошло им с рук, если бы они не забрали браслетик его маленькой ' +
      'дочки. Не в силах это терпеть, Хатч отправляется на поиски наглецов, ' +
      'а на обратном пути ввязывается в драку с пьяными хулиганами, пристававшими ' +
      'к девушке в общественном транспорте. От души помахав кулаками, наш аудитор ' +
      'отправляет дебоширов в больницу, но оказывается, что один из пострадавших — ' +
      'брат влиятельного русского бандита. И он теперь жаждет мести.',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a74d86f6-a78a-46dd-8c1e-65cd79984902/300x450',
    trailerLink: 'https://www.youtube.com/watch?v=bZOHmDYCo2I',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a74d86f6-a78a-46dd-8c1e-65cd79984902/300x450',
    movieId: '854730',
    nameRu: 'Никто',
    nameEN: 'Nobody'
  },
  {
    director: 'Пегги Холмс, Хавьер Абад',
    duration: '105',
    country: 'США, Испания',
    year: '2022',
    description: 'Выпускница детского дома Сэм больше всего на свете хочет, ' +
      'чтобы её подружке, маленькой Хэйзел, улыбнулась удача, и девочка наконец ' +
      'обрела семью. Сама Сэм везучестью не отличается, но однажды она угощает ' +
      'бродячего кота, находит счастливую монетку, и с этого момента ей начинает ' +
      'сопутствовать удача буквально во всём. Решив отдать монетку Хэйзел, девушка ' +
      'случайно смывает её в унитаз, а когда снова сталкивается с тем котом, ' +
      'понимает, что это не обычное животное. Пытаясь выпросить у котейки ' +
      'новую монетку, Сэм начинает его преследовать и попадает в волшебную ' +
      'Страну Удачи..',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bfeded2-8d0f-40d6-ab0c-b06ea80bca84/300x',
    trailerLink: 'https://www.youtube.com/watch?v=4B_0KRKsDQY',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bfeded2-8d0f-40d6-ab0c-b06ea80bca84/300x',
    movieId: '854730',
    nameRu: 'Удача',
    nameEN: 'Luck'
  },
  {
    director: 'Владимир Саков',
    duration: '101',
    country: 'Россия',
    year: '2023',
    description: 'Рыжеволосая ведьма Яга живет с котом-изобретателем и весёлыми ' +
      'домовыми в избушке на болотах Тридевятого царства и практикуется в магии. ' +
      'Чтобы научиться колдовать по-настоящему, ей не хватает Книги Заклинаний, ' +
      'похищенной у неё много лет назад злой колдуньей Белладонной. Внезапно ' +
      'судьба дает Яге шанс поквитаться с заклятой обидчицей, когда на пороге ' +
      'избушки появляется царевна Синеглазка. В чем сила истинного волшебства, ' +
      'и кто окажется настоящей злодейкой?',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/fff45bf8-85b4-4511-9740-4e5ff696d265/300x450',
    trailerLink: 'https://www.youtube.com/watch?v=NUo2GccvGqY',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/fff45bf8-85b4-4511-9740-4e5ff696d265/300x450',
    movieId: '854730',
    nameRu: 'Яга и книга заклинаний',
    nameEN: ''
  },
  {
    director: 'Кристофер Нолан',
    duration: '180',
    country: 'США, Великобритания',
    year: '2023',
    description: 'История жизни американского физика Роберта Оппенгеймера, ' +
      'который стоял во главе первых разработок ядерного оружия.',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/300x450',
    trailerLink: 'https://www.youtube.com/watch?v=zU2vtD7npd0',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/300x450',
    movieId: '854730',
    nameRu: 'Оппенгеймер',
    nameEN: 'Oppenheimer'
  },
  {
    director: 'Флориан Давид Фиц',
    duration: '111',
    country: 'Германия',
    year: '2018',
    description: 'Лучшие друзья Пауль и Тони, находясь буквально в шаге ' +
      'от богатства, на спор отказываются от всего своего имущества, ' +
      'чтобы доказать – вещи не имеют на парней никакого влияния. Ставки ' +
      'высоки, а их пари оказывается под угрозой, когда на горизонте появляется ' +
      'симпатичная девушка, ведь сложно произвести впечатление, когда ты ' +
      'миллионер без штанов…',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/0aa5f954-fa3d-4a2a-8894-02590a0921d1/300x450',
    trailerLink: 'https://www.youtube.com/watch?v=zU2vtD7npd0',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/0aa5f954-fa3d-4a2a-8894-02590a0921d1/300x450',
    movieId: '854730',
    nameRu: '100 вещей и ничего лишнего',
    nameEN: '100 Dinge'
  },
  {
    director: 'Терри Гиллиам',
    duration: '106',
    country: 'Великобритания, Румыния, Франция',
    year: '2013',
    description: 'Эксцентричный компьютерный гений Коэн Лет бьется над неразрешимой ' +
      'теоремой. Благодаря костюму виртуальной реальности, изобретенному мальчиком ' +
      'Бобом, Лету удается совершить путешествие в скрытое пространство и узнать тайну ' +
      'своей души. Эту разгадку ищет не только он сам, но и таинственный Менеджмент, ' +
      'который правит всем миром посредством всевидящих устройств под названием ManCams.',
    image: 'https://www.mirf.ru/wp-content/uploads/2015/11/maxresdefault14.jpg',
    trailerLink: 'https://youtu.be/poH6j9EKQIo',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/5757cea9-a8b6-48f8-b9ce-c233cf6b2970/300x450',
    movieId: '854730',
    nameRu: 'Теорема Hеро',
    nameEN: 'The Zero Theorem'
  },
  {
    director: 'Дмитрий Высоцкий',
    duration: '65',
    country: 'Россия',
    year: '2022',
    description: 'Коржик, Карамелька и Компот вместе с родителями отправляются ' +
      'отдыхать на морской курорт, где их ждут яркие события, полные весёлой ' +
      'суматохи и встреч с новыми друзьями.',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/b4f8d337-de5d-44e2-8f6b-bc81a4bdb796/300x450',
    trailerLink: 'https://www.youtube.com/watch?v=onoR4BD5FKw',
    thumbnai: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/b4f8d337-de5d-44e2-8f6b-bc81a4bdb796/300x450',
    movieId: '854730',
    nameRu: 'Три кота и море приключений',
    nameEN: ''
  },
]

export default moviesTestStartArray