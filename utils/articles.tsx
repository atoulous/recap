export interface ArticleInterface {
  id: number,
  title: string,
  url: string,
  src: string,
  from: string,
  date: Date,
  tags: Array<string>,
  text: string,
  price: string,
  priceNumber: number,
}

export const favouriteArticle: ArticleInterface = {
  id: 7,
  title: 'Mas Seguilla',
  url: 'https://www.airbnb.fr/rooms/21305375?check_in=2021-07-17&check_out=2021-07-23&guests=1&adults=16&s=67&unique_share_id=71f66d9e-d81d-4ce8-b835-dedcd300d22c',
  src: 'https://a0.muscache.com/im/pictures/088c5bc2-90fc-4fa7-8b71-3b7dbf8112b4.jpg?im_w=1440',
  from: 'Mika',
  date: new Date('18-04-2021'),
  tags: ['Espagne', '18 voyageurs'],
  text: 'Mas Seguilla es una masía catalana que data de 1891 y que actualmente está totalmente restaurada. Rodeada de 3 hectáreas de campo, con 1 huerto, viñas y arboles fruteros. La masía se compone de tres secciones independientes pero adyacentes que crean diferentes ambientes. Dispone de piscina y zona de lavadora y despensa.',
  price: '600/ nuit',
  priceNumber: 600,
};

export const articles: Array<ArticleInterface> = [
  {
    id: 0,
    title: 'Gite de caractère du XVIIIeme',
    url: 'https://www.airbnb.fr/rooms/34875417?check_in=2021-07-17&check_out=2021-07-24&guests=1&adults=15&s=67&unique_share_id=f26fda8f-314c-4a11-9f44-0a747f9e10d1',
    src: 'https://a0.muscache.com/im/pictures/5c683477-6adf-4d9b-8d28-4b48b7014165.jpg?im_w=1200',
    from: 'rico',
    date: new Date('15-04-2021'),
    tags: ['Occitanie', '15 voyageurs', 'Salle de sport'],
    text: 'Domaine "Aux Quatr\'Arches" entre CORDES S/CIEL village préféré des Français 2014, et SAINT ANTONIN NOBLE VAL dans le triangle d\'or, entre gorges de l\'Aveyron et Tarn, récemment restaurée, avec pigeonnier, piscine dans l\'enceinte d\'une ancienne grange, ancien four à pain restauré à l\'identique avec le confort d\'aujourd\'hui. Circuits touristiques de villages médiévaux. Activités sportives comme le canoë-kayak, l\'escalade, randonnées pédestres et à vélo. Location de 2 à 15 personnes.',
    price: '300€/ nuit',
    priceNumber: 300,
  },
  {
    id: 1,
    title: 'Mas du Coussoul, aux Alpilles',
    src: 'https://a0.muscache.com/im/pictures/f876b28b-e393-4a8b-814a-60fb0c59b9a6.jpg?im_w=1200',
    url: 'https://www.airbnb.fr/rooms/38079032?check_in=2021-07-24&check_out=2021-07-31&guests=1&adults=15&s=67&unique_share_id=f43462dc-d9c4-4294-be62-a36ebd3461de',
    from: 'Pedro',
    date: new Date('15-04-2021'),
    tags: ['Occitanie', '16 voyageurs', 'Isolé'],
    text: 'Le mas du Coussoul est une propriété avec une villa dans un grand jardin (7000m2) et une piscine privée (12m/06m) . Elle peut accueillir jusque 15 personnes. Cette villa avec vue sur les Alpilles est située en pleine campagne provençale. Calme et détente au son des grillons.',
    price: '450€/ nuit',
    priceNumber: 450,
  },
  {
    id: 3,
    title: 'PROPRIETE LANDAISE\n',
    url: 'https://www.airbnb.fr/rooms/30526888?check_in=2021-07-17&check_out=2021-07-24&guests=1&adults=13&s=67&unique_share_id=172f8d52-4119-4cdd-bb93-aae501a41b71',
    src: 'https://a0.muscache.com/im/pictures/84101627/68c22fd9_original.jpg?im_w=1200',
    from: 'NC',
    date: new Date('15-04-2021'),
    tags: ['Nouvelle-Aquitaine', '14 voyageurs'],
    text: `A 9 km de la plage, propriété landaise comprenant une ferme rénovée de plus de 350m² et sa dépendance de 90m².
    Une maison de famille où il fait bon recevoir, partager des moments uniques, se retrouver au bord de la piscine...`,
    price: '650€/ nuit',
    priceNumber: 650,
  },
  {
    id: 4,
    title: 'Maison au calme avec piscine',
    src: 'https://a0.muscache.com/im/pictures/e936e14f-90d6-44fe-aa41-608335f32ab4.jpg?im_w=1200',
    url: 'https://www.airbnb.fr/rooms/43762072?check_in=2021-07-17&check_out=2021-07-24&guests=1&adults=13&s=67&unique_share_id=5e32ee55-b2c3-4ee1-a7e3-90d968b09a8d',
    from: 'NC',
    date: new Date('15-04-2021'),
    tags: ['Nouvelle-Aquitaine', '14 voyageurs'],
    text: 'Maison de campagne de 220 m2, avec piscine et pool-house, pouvant accueillir une douzaine de personnes.\n' +
      'Classée 3 étoiles.',
    price: '445€/ nuit',
    priceNumber: 445,
  },
  {
    id: 5,
    title: 'Superbe villa sans aucun vis à vis!\n',
    src: 'https://a0.muscache.com/im/pictures/abd8b253-036c-48fc-bcaf-cd18bb656f14.jpg?im_w=1200',
    url: 'https://www.airbnb.fr/rooms/5468226?check_in=2021-07-17&check_out=2021-07-24&guests=15&adults=15&s=67&unique_share_id=a5ff1140-f330-4973-8ec7-52afe8975acc',
    from: 'NC',
    date: new Date('15-04-2021'),
    tags: ['Languedoc-Roussillon', '15 voyageurs'],
    text: 'Agréable villa de plein pied,située dans un cadre calme au milieu des vignes et des bois La villa est spacieuse et confortablement meublée sans aucun vis à vis!\n' +
      'Capacité d\'accueil 16 pers\n' +
      'Jacuzzi prévu uniquement en location week end....pas disponible en location semaine en été',
    price: '493€/ nuit',
    priceNumber: 493,
  },
  {
    id: 6,
    title: 'Maison de campagne',
    url: 'https://www.airbnb.fr/rooms/41280195?check_in=2021-07-17&check_out=2021-07-24&guests=1&adults=15&s=67&unique_share_id=c2fdc531-999a-420f-a1af-ada0877c8df3',
    src: 'https://a0.muscache.com/im/pictures/126bd43a-896c-4bd7-b3b1-bb0abfd606c8.jpg?im_w=1200',
    from: 'NC',
    date: new Date('15-04-2021'),
    tags: ['Nouvelle-Aquitaine', '15 voyageurs'],
    text: 'Venez vous reposer dans cette belle maison de campagne avec son jardin de 5500 m2.\n' +
      'Elle se compose au rez-de-chaussée d’une grande cuisine moderne, d’une grande salle à manger, d’un salon avec cheminée et d’une suite parentale avec salle d’eau privative.',
    price: '300€/ nuit',
    priceNumber: 300,
  },
];
