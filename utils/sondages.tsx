export interface SondageInterface {
  key: number,
  title: string,
  url: string,
  src: string,
  text: string,
}

export const sondages: Array<SondageInterface> = [
  {
    key: 2,
    title: 'Choix de jours',
    text: 'Sondage en cours, allez votez camarades !',
    url: 'https://doodle.com/poll/8gwt89u44b8bsks2?utm_source=poll&utm_medium=link',
    src: 'sondage2.png',
  },
  {
    key: 1,
    title: 'Choix de semaine',
    text: 'La semaine du samedi 17 au samedi 24 juillet win the GP !',
    url: 'https://doodle.com/poll/emgsxq5t563hpc2c?utm_source=poll&utm_medium=link',
    src: 'sondage.png',
  },
  {
    key: 3,
    title: 'Choix de maison',
    text: 'Sondage non fait',
    url: '',
    src: '',
  },
];
