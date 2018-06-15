import * as paths from '../routes/paths';

import music from '../assets/images/music.jpeg'
import food from '../assets/images/food.jpg'
import classes from '../assets/images/classes.jpeg'
import arts from '../assets/images/arts.jpeg'
import parties from '../assets/images/parties.jpeg'
import sports from '../assets/images/sports.jpeg'
import networking from '../assets/images/networking.jpeg'

export default [
  {
    title: 'Music',
    description: 'Intimate house concerts, major music festivals, and the occasional dance party',
    image: music,
    path: paths.MUSIC,
    wide: true
  },
  {
    title: 'Food & Drink',
    description: 'Dinner parties, tastings and big-time festivals',
    image: food,
    path: paths.FOOD,
  },
  {
    title: 'Classes',
    description: 'Enlightening seminars, technical workshops and fitness classes',
    image: classes,
    path: paths.CLASSES,
  },
  {
    title: 'Arts',
    description: 'Plays, comedy nights, art exhibitions and film festivals',
    image: arts,
    path: paths.ARTS,
  },
  {
    title: 'Parties',
    description: 'Casual happy hours, singles nights and all-night celebrations',
    image: parties,
    path: paths.PARTIES,
  },
  {
    title: 'Sports & Wallness',
    description: 'Obstacle races, drop-in yoga classes and the big game',
    image: sports,
    path: paths.SPORTS,
  },
  {
    title: 'Networking',
    description: 'Business mixers, hobby meetups, and panel discussions',
    image: networking,
    path: paths.NETWORKING,
    wide: true,
  },
];