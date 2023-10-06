const maxMoviesPerPage = {
  desktop: 12,
  tablet: 8,
  mobile: 4,
}

const shortMoviesDuration = 40;

const messages = {
  noMoviesFound: 'Ничего не найдено',
  unexpectedErrorOnBeafilmServer: 'Во время запроса произошла ошибка. ' +
    'Возможно, проблема с соединением или сервер недоступен. Подождите ' +
    'немного и попробуйте ещё раз'
}

const regexPatterns = {
  email: '^[^@]+@[^@]+.[a-zA-Z]{2,5}$',
  userName: '^[A-Za-zА-Яа-яЁё\\-\\s]+$',
}

// массив для тестирования верстки
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
    nameRu: 'Теорема Зеро',
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
  },
  {
    duration: '149',
    image: 'https://avatars.mds.yandex.net/i?id=e2fe6a0836a5e3eaf624edcfad98a331_l-8497350-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/jT4xq46iNiQ',
    movieId: '564238',
    nameRu: '2001 год: Космическая одиссея '
  },
  {
    duration: '114',
    image: 'https://avatars.mds.yandex.net/i?id=7991f1c215734e7690ea5ca7f71348fd_l-5208510-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/JBcRg0g5Y4I',
    movieId: '5344677',
    nameRu: 'Столетний старик, который вылез в окно и исчез'
  },
  {
    duration: '100',
    image: 'https://avatars.mds.yandex.net/i?id=a275443c20761fb72da11b540908c8e4_l-3481047-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/Kg5cMfrrZFU',
    movieId: '345678',
    nameRu: 'День курка'
  },
  {
    duration: '98',
    image: 'https://avatars.mds.yandex.net/i?id=1ee5a1bb791b131540c6643ce2950237_l-5366304-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/cMo3-FJBPLw',
    movieId: '45632798',
    nameRu: 'Пушки Акимбо'
  },
  {
    duration: '97',
    image: 'https://avatars.mds.yandex.net/i?id=d60955c16bfed62dcd2bcaa904df1ad1_l-4440117-images-thumbs&n=13',
    trailerLink: 'https://youtu.be/864JU2qIyag',
    movieId: '843456',
    nameRu: 'Человек — швейцарский нож'
  },
  {
    duration: '98',
    image: 'https://avatars.mds.yandex.net/i?id=ae4c8563921946e0bc033645c9ccb3be_l-8351914-images-thumbs&ref=rim&n=13&w=1024&h=613',
    trailerLink: 'https://youtu.be/y5qb-ohVYyQ',
    movieId: '36543459',
    nameRu: 'Патруль времени'
  },
  {
    duration: '103',
    image: 'https://yandex-images.clstorage.net/4nGE7Q236/091624eMB0/X0RGSwvlaersAXLUVhB-GDpPgSCxOEUnAJY6KbbWFRUAxh_IEDm_o3J5lf4VpwRa896H9reg6WdBuaV9h3rbLBoTBBpIuy7q6RU53hoKcggvA5xjpHpcIwfPNiLauGdtdKw0-TtHktg8Kc6tQ-gaSrPi6-bUg-FFYsrha4UEjlJTTHNuKMQq9fE0COxCGHMlFSaAP4F6aXcvpU5-149nSHKgGd4qRKjeIjvzoHTefHeRysyz34D_akvy3mqKJ6lsX1NQSBryCuvQARrvXzdgDxcXpCCkX3Z9E4pqR-qfYXxQkDLSOWSKwzUG77he0XJIs_juqPKA-mxrxtxIqASJf3BqdEwtzjDt8TE5xX0Ybi4BMpculUBCfCS3Umbfs2BaUokC-jpro_EHMcOjR9d7T5DR_YTyp9twQfLgRIQtilNcf2BjOMcpzcArFOZmF1YeAxOOK4dTVFACn1Rf_4xjT0KbFuwmVIvdMxLuunDRU1a19-CMw7_YbH3izWuKIa5WRklrcAn6FPLkBAnDUDRXMxoWpS2oY29cGrhDYcSTYFVZpCvkOUuP1xIb64112Vpehej7v8y8xEh2w_xtjye6c213QkQU8jPh8BkJxm0XeSUxF70hj3xUYAWnUH_0jXVeWKUj4xd4ruUULsuTXsJXXqf31qzxrcZRRtbiTKAdp2Z5YVtcIPcsyO09LdtCF2sFKDCuCLxjXk0IhENQypFhXlSQEeEeSZ3FPC3MomvpQ1GOzPCU1p74TXXP_HWNA6tSTmZqQzfFFe3kNCnrWzhwMjgLmT2QfUlWOotRa9apRV5_kDbaH22i2yMd15FX9G58tM_CkeqI31RI-tNmvBm3ZlFLfXAf3gDT5hcuwXYnTAsHOKADsn5nSR-Hfmvjo05aXIIZ-yVVsN8UGe6LSuh9XpTx5KfyovpaTszDVYQOm0JMUWRdH9gP8vsREMBgNVMxABG_BrxvRHICiHJ00Y8',
    trailerLink: 'https://youtu.be/2j78nqWvfZg',
    movieId: '3765645',
    nameRu: 'Неудержимые'
  },
]

export {maxMoviesPerPage, shortMoviesDuration, messages, regexPatterns}
