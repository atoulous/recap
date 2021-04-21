export interface SondageInterface {
  id: number,
  title: string,
  url: string,
  src: string,
  text: string,
  buttonText?: string,
}

export const sondages: Array<SondageInterface> = [
  {
    id: 2,
    title: 'Choix de jours',
    text: 'Sondage en cours, allez votez camarades !',
    url: 'https://doodle.com/poll/8gwt89u44b8bsks2?utm_source=poll&utm_medium=link',
    src: 'sondage2.png',
  },
  {
    id: 1,
    title: 'Choix de semaine',
    text: 'La semaine du samedi 17 au samedi 24 juillet win the GP !',
    url: 'https://doodle.com/poll/emgsxq5t563hpc2c?utm_source=poll&utm_medium=link',
    src: 'sondage.png',
  },
  {
    id: 3,
    title: 'Choix de maison',
    text: 'Mas Seguilla - Espagne, Catalogne',
    buttonText: 'Lien Airbnb',
    src: 'https://a0.muscache.com/im/pictures/088c5bc2-90fc-4fa7-8b71-3b7dbf8112b4.jpg?im_w=1440',
    url: 'https://www.airbnb.fr/rooms/21305375?check_in=2021-07-17&check_out=2021-07-23&guests=1&adults=16&s=67&unique_share_id=71f66d9e-d81d-4ce8-b835-dedcd300d22c',
  },
];
