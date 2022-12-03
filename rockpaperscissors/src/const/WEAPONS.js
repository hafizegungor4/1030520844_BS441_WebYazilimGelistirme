import { ReactComponent as HandScissors } from '../assets/scissors.svg';
import { ReactComponent as HandRock } from '../assets/rock1.svg';
import { ReactComponent as HandPaper } from '../assets/paper.svg';

const WEAPONS = [
  {
    id: 0,
    name: 'Rock',
    beats: 'Scissors',
    component: HandRock,
  },
  {
    id: 1,
    name: 'Paper',
    beats: 'Rock',
    component: HandPaper,
  },
  {
    id: 2,
    name: 'Scissors',
    beats: 'Paper',
    component: HandScissors,
  },
];

export default WEAPONS;
