import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
import youtube from '../assets/icon-youtube.svg'
import iconUp from '../assets/icon-up.svg'
import iconDown from '../assets/icon-down.svg'

const mainCards = [
  {
    id: 1,
    userName: '@nathanf',
    followText: 'followers',
    followToday: '12 Today',
    image: facebook,
    icon: iconUp,
    target: 1987,
    color: '#178FF5',
    media: 'facebook',
  },
  {
    id: 2,
    userName: '@nathanf',
    followText: 'followers',
    followToday: '99 Today',
    image: twitter,
    icon: iconUp,
    target: 1044,
    color: '#178FF5',
    media: 'twitter',
  },
  {
    id: 3,
    userName: '@realnathanf',
    followText: 'followers',
    followToday: '1099 Today',
    image: instagram,
    icon: iconUp,
    target: '11k',
    letter: 'k',
    color: 'linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)',
    media: 'instagram',
  },
  {
    id: 4,
    userName: 'Nathan F.',
    followText: 'subscribers',
    followToday: '144 Today',
    image: youtube,
    icon: iconDown,
    target: 8239,
    color: '#C4032B',
    media: 'youtube',
  },
]

export default mainCards
