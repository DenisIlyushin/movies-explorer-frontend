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
    image: 'https://yandex-images.clstorage.net/4nGE7Q236/091624eMB0/X0RGSwvlaersAXLUVhB-GDpPgSCxOEUnAJY6KbbXEB9TxBibQDHvrnN7kP4e9lBc9NnSpLWkuDMSufZ9h3rWIRwcChhNuy7q6RU53hoKcggvA5xjpHpcIwfPNiLauGdtdKw0-TtHktg8Kc6tQ-gaSrPi6-bUg-FFYsrha4UEjlJTTHNuKMQq9fE0COxCGHMlFSaAP4F6aXcvpU5-149nSHKgGd4qRKjeIjvzoHTefHeRysyz34D_akvy3mqKJ6lsX1NQSBryCuvQARrvXzdgDxcXpCCkX3Z9E4pqR-qfYXxQkDLSOWSKwzUG77he0XJIs_juqPKA-mxrxtxIqASJf3BqdEwtzjDt8TE5xX0Ybi4BMpculUBCfCS3Umbfs2BaUokC-jpro_EHMcOjR9d7T5DR_YTyp9twQfLgRIQtilNcf2BjOMcpzcArFOZmF1YeAxOOK4dTVFACn1Rf_4xjT0KbFuwmVIvdMxLuunDRU1a19-CMw7_YbH3izWuKIa5WRklrcAn6FPLkBAnDUDRXMxoWpS2oY29cGrhDYcSTYFVZpCvkOUuP1xIb64112Vpehej7v8y8xEh2w_xtjye6c213QkQU8jPh8BkJxm0XeSUxF70hj3xUYAWnUH_0jXVeWKUj4xd4ruUULsuTXsJXXqf31qzxrcZRRtbiTKAdp2Z5YVtcIPcsyO09LdtCF2sFKDCuCLxjXk0IhENQypFhXlSQEeEeSZ3FPC3MomvpQ1GOzPCU1p74TXXP_HWNA6tSTmZqQzfFFe3kNCnrWzhwMjgLmT2QfUlWOotRa9apRV5_kDbaH22i2yMd15FX9G58tM_CkeqI31RI-tNmvBm3ZlFLfXAf3gDT5hcuwXYnTAsHOKADsn5nSR-Hfmvjo05aXIIZ-yVVsN8UGe6LSuh9XpTx5KfyovpaTszDVYQOm0JMUWRdH9gP8vsREMBgNVMxABG_BrxvRHICiHJ00Y8',
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
    image: 'https://avatars.mds.yandex.net/i?id=452aea709dd96904c00a92bcba714b03_l-8181450-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/FuyKbreXQ7A',
    thumbnail: 'https://www.kino-teatr.ru/movie/poster/34828/140023.jpg',
    movieId: '2385934',
    nameRu: 'Симпсоны в кино',
    nameEN: 'The Simpsons Movie'
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
    image: 'https://avatars.mds.yandex.net/i?id=1abc518defa2c78d99bb4954daa54f7d_l-4101447-images-thumbs&n=13',
    trailerLink: 'https://www.youtube.com/watch?v=bZOHmDYCo2I',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a74d86f6-a78a-46dd-8c1e-65cd79984902/300x450',
    movieId: '2342330',
    nameRu: 'Никто',
    nameEN: 'Nobody'
  },
  {
    director: 'Кристофер Нолан',
    duration: '180',
    country: 'США, Великобритания',
    year: '2023',
    description: 'История жизни американского физика Роберта Оппенгеймера, ' +
      'который стоял во главе первых разработок ядерного оружия.',
    image: 'https://cdn.iportal.ru/preview/news/articles/96effb7274532d524e4659f0fa6a4fb300f830b7_1831_860.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=zU2vtD7npd0',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/300x450',
    movieId: '8342530',
    nameRu: 'Оппенгеймер',
    nameEN: 'Oppenheimer'
  },
  {
    director: 'Пегги Холмс, Хавьер Абад',
    duration: '105',
    country: 'США, Испания',
    year: '2022',
    description: 'В основу этой приключенческой ленты положен роман Дэниела ' +
      'Уоллеса «Большая рыба: роман мифических пропорций». Умирает отец, ' +
      'о жизни которого сын хочет узнать как можно больше, собирая истории ' +
      'о нем. Сын пытается воссоздать ускользающую жизнь отца в серии легенд ' +
      'и мифов, которые тот придумывает на основе разрозненных фактов. Взлеты ' +
      'и падения в жизни человека в итоге предстают в неожиданном ракурсе.',
    image: 'https://avatars.mds.yandex.net/i?id=f468bf1129024e460e40856158ae752d-5606166-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/gtanOohh48E',
    thumbnail: 'https://www.kinopoisk.ru/a1A6E1139/6aaa09CZb5/69tiTShEQBc4MDTW_rJXzrdBoPChzCoBToYJrbtajuggdEx-7UAU8Snz3dcSW4ZsmlxeTohAYyt0Sdj41hGOtanbJhl3D1xJb24qzabkUZ-tWfatt9diVwqbGvDgBaHYCEZlDMt_PNEFkpuXVUHUMcIcTBXYVTsyNQ6qlpRj2NnV-1xYC04fExoSa_vKl2fMvDyp-pqVPRBg3gSRsHq69BxmaCHuex_uNK6UplUF9h_LEHY55Uc2bSkwgZz6VMrL9-lYYDteBx4ULXXsxa9S4oIIgdSYhwoVbfwarq1fmPU9Y34GxkIG0SK_m5l7HvYX5CRIOOFWOFgFPJii5nL439D3W2IsXiM7DQJCyfqxftuEHqPnkbAnCFD9Maasb7XED3BWHPd5M9kmpqmGWwfJCOMbeBffTghRCT-QrsNK8_DE_FprNHYLKwszeOjxnXXihgmb46ChHB1uwga3r1mP9wdwdxjRZRDCGJ2Hg3UE2RrLBmkr-mcCcRAvs7v1UPjB59NCazJGAg8vMUPO-aZL6IongtKTkj4eV8wzjZ10teM-ZUgA6FwB0CKSo6RJB_0gzRp6GdRHFVMDNJKw0kDr9NzicX0TWwI8Bg9L2tiZcs2oJYX8hZsICmDbMo2_YLHgE2luENNCMPMvl765YyznIcAAaRvEcj9-JBOsrP1N6dn29F5eMFs-CR82fOXopkvBnSiW_aGvCgBX4Aqqnla25T5zVznGZhDYNo6homUu0h7JIF0v0mAmfz0cv6bgUfHo9dFxTh9FIhgzG1fh8bRZ5owEnPahiTUefsADvYVFh8kATnUby0Q57C-VpK5FA8cd2jRMAMFRM1A9Hoaa3GTX3_LUYmAieCA3Khdp5syfX-O5Pa35vaw-IWztA42QfpPBHEp2MuBuIfEmkYirdwHxFusiczPaTiRmPhqwg_Fg2v7Z6FtfNE4GPgYOcfXKhnf-iS6l_7iwLwhK4CmJvWS1zAJCXTvUeSLZLb-khlQAzD7cCVUZyHIKWxM3uLj7QtLUzNlXRCJWPjE_M17D1JR857w1pd2itzsQc-gxnLhmlvIucEIb_mUw5CuqopJRLdY35RtMIOl1BlsTLIyk9kDT_9b2V3oqWhYyKQdu2NmaXsyqIJr3hY8FHmPFBqehWKjrAWtTEe9AO8YVt4WqWCHtHsMaVA7UQB1XPxGBhdZtyf339XtgOGYHGDQHec77uWf6iiWc-rmpGgpc0SmBtkGq8Cd9TgfObDfAArell1A-6irPPGUj33cxSQERkprRfNTM2f9_Rwl1IRsODVTLyZlY7L4uov6zmSouYtITnKdMl8UsUWIA0WQC4yCaoIFlHu8zywlPOdpEF3ACAbGF51PX9Nj7R0kecQoKKwRV5P6aUceoJLb7goImNHDnOqyNY7XjIktRIOh3JsQum76yYCLZFOgRWhjWQj9UCTSDvuBj7Or8_W9eLngbKgoLc-vdj1fjoQq-85G0LAZL-Smov2yw3QZ9VQXoVBT6P5Gup08a8RPgNlYR1EwdWSsSmr7yUc7-ycN1dTduHD4vMmj2y6hQzrYcqtiwgBcFU8I0lYFhlPYDY0YhwkU87CGXmIhxJ_wd3iNOMON-Bn0jDI-553f13P7IW08JUiwYNCR3_OWtdN-FDIL3gaobJV35LLWDRLnCH0lLC8Z3JuAnhaG3VifeOtg_STjGZTx3LhmHmOJ199HvyUR5M34sPSgmfcrTt0baph2E1K-iJyx_2ACiv0aq4xpCbRzLXxDHK5G7mFU-zjbPB1MO53UhdD4OpaDgUdjq1_VgYRBVPgI7BGve27FwzaIcv_2csjgLbNgNi4FziMQeYkgL9mki_wOZgqZKFtoMwwtJDdxVHmkhLIK-0lTN4v7zR3ofRTcCECZU59q-UcK5AYfvvoUCMVveK6awcp_yMXVQK8B0N9I1sLm5ZSzaGuUebh3gQB5INA24mNJF3MDwwHNKN0MhPRkMe_bmnljcpjmfxJ-yPAl8-Q-Bp1m57TxpZBbRTxj_O56NhW8K-jbjHVcL9Gc1aDUomr7_QdTq9OpEWwJGIj4xOkvD3K1c7aMtvsSTjS4zU-0IqJ5Yi-0LdXUF4X889Q6OmZd4DtAx5jpvHvhBNHcvNoWv5Gry9crIYEkrVgIWMBV72eaoQf6dB57Ts4c9C1vhOIC9QJPpDn1RAvdBPsYtmIiGciPoIt0SZij4fyZNKi2PuvFW9szXylB-D38FCBE7fuj0n1_RgSG_-paQCBdf3yOmlnKs9gBoUjDjdzHSAo6EtmAA3BvBNH8Xy0k_XTYSoKzSbcj02O9PXyp8JgIICl_d-rBx3KMhgPSFsi8yQ-I1jph9isg8f2o-yG8F8wi1nJBtA90f-AtSHslJJk8NNqeY8kv_2dzVc1YtcT85PRVixMukUdG2BZv5o7YbB3fRBrSPd7nKJW9JMfZ1NtkChai0TCzLO-sGWyPlRAl0KCG4m991yuvNzHpVNW0oGSgZSuf2t0HsiR-px76zCxZy0SCtvle37jFDbwXDbDrbA66WrEo11i_5EkYb2XUhbCAym67GfMP72vlkTxd-LCs0JU3i0ah8z4EdjOCnsRwDe8Qnop5TlsU_X1A3y34h8QCFqKJ2CdUv_BdPG_RnJWUqGrCxw0vD9cT7cFoscgAPLhFP-_CqV-6sFaXEtJUJCFTzIa-_ebPtOUhiIPd9M98ojoGMZyXJPP4xSRfwTzJoFjy-vNVR1uzP22d8G2QlKRcaa8rPqVTRtSqC3bCRIgdO5gSXhWW40DBTRSfnfTzsHr6BtHIF7izhNlE_4lYmcSUSuozYXs_BxfVESyxWHw4EDnHr_rhg24sltMKiryEzS-EokblnrsYlYmgb1kcZ0B21oqNxJNEM3j9VDcVPElgjDpyz_3Ld8-3WU3sVfSwKFgJuw8q_XeyKI4Dsn60IJVnBO6qQZ7DUM1VLP_NsHuc4iKmoeyHbDeUxbxbYYiRkLB0',
    movieId: '8345260',
    nameRu: 'Крупная рыба',
    nameEN: 'Big Fish'
  },
  {
    director: 'Терри Гиллиам',
    duration: '106',
    country: 'США',
    year: '1998',
    description: 'Два приятеля отправляются в Лас-Вегас. Спортивный обозреватель ' +
      'Рауль Дюк едет осветить знаменитую гонку «Минт 400». Его спутника зовут ' +
      'Доктор Гонзо, и он адвокат. Обзор «Минт 400» из-за непогоды и отсутствия ' +
      'интереса у рецензента оборачивается полным провалом, поэтому Дюк и Гонзо ' +
      'отправляются в казино.',
    image: 'https://w.forfun.com/fetch/4f/4fa04bf7e7f6032ea073e8abdd5d7dca.jpeg',
    trailerLink: 'https://youtu.be/XZs6hWIv_78',
    thumbnail: 'https://legatomusic.ru/nas/img/cdimg2/00/30/01/31.jpg',
    movieId: '234235',
    nameRu: 'Страх и ненависть в Лас-Вегасе',
    nameEN: 'Fear and Loathing in Las Vegas'
  },
  // {
  //   director: 'Флориан Давид Фиц',
  //   duration: '111',
  //   country: 'Германия',
  //   year: '2018',
  //   description: 'Лучшие друзья Пауль и Тони, находясь буквально в шаге ' +
  //     'от богатства, на спор отказываются от всего своего имущества, ' +
  //     'чтобы доказать – вещи не имеют на парней никакого влияния. Ставки ' +
  //     'высоки, а их пари оказывается под угрозой, когда на горизонте появляется ' +
  //     'симпатичная девушка, ведь сложно произвести впечатление, когда ты ' +
  //     'миллионер без штанов…',
  //   image: 'https://avatars.mds.yandex.net/i?id=78c8a4efa3c994f9c0949ee26810bd19_l-5305442-images-thumbs&n=13',
  //   trailerLink: 'https://www.youtube.com/watch?v=zU2vtD7npd0',
  //   thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/0aa5f954-fa3d-4a2a-8894-02590a0921d1/300x450',
  //   movieId: '853453',
  //   nameRu: '100 вещей и ничего лишнего',
  //   nameEN: '100 Dinge'
  // },
  // {
  //   director: 'Пегги Холмс, Хавьер Абад',
  //   duration: '105',
  //   country: 'США, Испания',
  //   year: '2022',
  //   description: 'Выпускница детского дома Сэм больше всего на свете хочет, ' +
  //     'чтобы её подружке, маленькой Хэйзел, улыбнулась удача, и девочка наконец ' +
  //     'обрела семью. Сама Сэм везучестью не отличается, но однажды она угощает ' +
  //     'бродячего кота, находит счастливую монетку, и с этого момента ей начинает ' +
  //     'сопутствовать удача буквально во всём. Решив отдать монетку Хэйзел, ' +
  //     'девушка случайно смывает её в унитаз, а когда снова сталкивается с тем ' +
  //     'котом, понимает, что это не обычное животное. Пытаясь выпросить у котейки ' +
  //     'новую монетку, Сэм начинает его преследовать и попадает в волшебную Страну ' +
  //     'Удачи..',
  //   image: 'https://www.mirf.ru/wp-content/uploads/2022/05/Luck-_-Apple-Original-Film-Announcement-image-1536x864-1.png',
  //   trailerLink: 'https://www.youtube.com/watch?v=4B_0KRKsDQY',
  //   thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bfeded2-8d0f-40d6-ab0c-b06ea80bca84/300x',
  //   movieId: '85234230',
  //   nameRu: 'Удача',
  //   nameEN: 'Luck'
  // },
  // {
  //   director: 'Дмитрий Высоцкий',
  //   duration: '65',
  //   country: 'Россия',
  //   year: '2022',
  //   description: 'Коржик, Карамелька и Компот вместе с родителями отправляются ' +
  //     'отдыхать на морской курорт, где их ждут яркие события, полные весёлой ' +
  //     'суматохи и встреч с новыми друзьями.',
  //   image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/b4f8d337-de5d-44e2-8f6b-bc81a4bdb796/300x450',
  //   trailerLink: 'https://www.youtube.com/watch?v=onoR4BD5FKw',
  //   thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/b4f8d337-de5d-44e2-8f6b-bc81a4bdb796/300x450',
  //   movieId: '823424730',
  //   nameRu: 'Три кота и море приключений',
  //   nameEN: ''
  // },
]

const maxMoviesPerPage = 8

export {moviesTestStartArray, maxMoviesPerPage}