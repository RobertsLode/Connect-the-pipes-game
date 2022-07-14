import i from '../images/iiii.png';
import II from '../images/III.png';
import L from '../images/LLL.png';
import T from '../images/TT.png';
import X from '../images/XX.png';

export type figurePropsMainArray = [
  {
  directions: number[]
    pipe: string
    compatable: number[]
    connected: boolean
    img: string
    rotate: number
}[]
]
export type figureProps = {
  directions: number[]
    pipe: string
    compatable: number[]
    connected: boolean
    img: string
    rotate: number
}

const figures = [
  {
    directions: [1, 0, 0, 0],
    pipe: '╹',
    compatable: [0, 0, 1, 0],
    connected: false,
    img: i,
    rotate: 90,
  },
  {
    directions: [0, 1, 0, 0],
    pipe: '╺',
    compatable: [0, 0, 0, 1],
    connected: false,
    img: i,
    rotate: 180,
  },
  {
    directions: [0, 0, 1, 0],
    pipe: '╻',
    compatable: [1, 0, 0, 0],
    connected: false,
    img: i,
    rotate: 270,
  },
  {
    directions: [0, 0, 0, 1],
    pipe: '╸',
    compatable: [0, 1, 0, 0],
    connected: false,
    img: i,
    rotate: 0,
  },
  {
    directions: [1, 1, 0, 0],
    pipe: '┗',
    compatable: [0, 0, 1, 1],
    connected: false,
    img: L,
    rotate: 0,
  },
  {
    directions: [0, 1, 1, 0],
    pipe: '┏',
    compatable: [1, 0, 0, 1],
    connected: false,
    img: L,
    rotate: 90,
  },
  {
    directions: [0, 0, 1, 1],
    pipe: '┓',
    compatable: [1, 1, 0, 0],
    connected: false,
    img: L,
    rotate: 180,
  },
  {
    directions: [1, 0, 0, 1],
    pipe: '┛',
    compatable: [0, 1, 1, 0],
    connected: false,
    img: L,
    rotate: 270,
  },
  {
    directions: [0, 1, 0, 1],
    pipe: '━',
    compatable: [0, 1, 0, 1],
    connected: false,
    img: II,
    rotate: 0,
  },
  {
    directions: [1, 0, 1, 0],
    pipe: '┃',
    compatable: [1, 0, 1, 0],
    connected: false,
    img: II,
    rotate: 90,
  },
  {
    directions: [1, 1, 0, 1],
    pipe: '┻',
    compatable: [0, 1, 1, 1],
    connected: false,
    img: T,
    rotate: 180,
  },
  {
    directions: [1, 1, 1, 0],
    pipe: '┣',
    compatable: [1, 0, 1, 1],
    connected: false,
    img: T,
    rotate: 270,
  },
  {
    directions: [0, 1, 1, 1],
    pipe: '┳',
    compatable: [1, 1, 0, 1],
    connected: false,
    img: T,
    rotate: 0,
  },
  {
    directions: [1, 0, 1, 1],
    pipe: '┫',
    compatable: [1, 1, 1, 0],
    connected: false,
    img: T,
    rotate: 90,
  },
  {
    directions: [1, 1, 1, 1],
    pipe: '╋',
    compatable: [1, 1, 1, 1],
    connected: false,
    img: X,
    rotate: 0,
  },
  {
    directions: [0, 0, 0, 0],
    pipe: '',
    compatable: [0, 0, 0, 0],
    connected: false,

  },
];

export default figures;
