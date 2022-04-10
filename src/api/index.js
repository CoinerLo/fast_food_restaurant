
const dataCategories = [{
    id: 1,
    name: 'Бургеры',
    products: [1, 2, 3, 4, 5, 6, 7],
  }, {
    id: 2,
    name: 'Твистеры',
    products: [8, 9, 10, 11],
  }, {
    id: 3,
    name: 'Курица',
    products: [12, 13, 14, 15],
  }, {
    id: 4,
    name: 'Баскеты',
    products: [],
  }, {
    id: 5,
    name: 'Снэки',
    products: [],
  }, {
    id: 6,
    name: 'Соусы',
    products: [],
  }, {
    id: 7,
    name: 'Напитки',
    products: [],
  }, {
    id: 8,
    name: 'Кофе и чай',
    products: [],
  }, {
    id: 9,
    name: 'Десерты',
    products: [],
  }, {
    id: 10,
    name: 'Хиты по 50',
    products: [],
  }, {
    id: 11,
    name: 'Хиты по 50',
    products: [],
  },
];

const dataGoods = [{
    id: 1,
    name: 'Бургер',
    price: 144,
    delivery: true,
    img: 'burger.png',
    new: true,
    hit: false,
  }, {
    id: 2,
    name: 'Бургер',
    price: 244,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: true,
  }, {
    id: 3,
    name: 'Бургер',
    price: 174,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: false,
  }, {
    id: 4,
    name: 'Бургер',
    price: 194,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: false,
  }, {
    id: 5,
    name: 'Бургер',
    price: 250,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: false,
  }, {
    id: 6,
    name: 'Бургер',
    price: 275,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: true,
  }, {
    id: 7,
    name: 'Супер Бургер',
    price: 300,
    delivery: true,
    img: 'burger.png',
    new: false,
    hit: false,
  }, {
    id: 8,
    name: 'Твистер',
    price: 144,
    delivery: true,
    img: 'twister.png',
    new: false,
    hit: true,
  }, {
    id: 9,
    name: 'Твистер',
    price: 144,
    delivery: true,
    img: 'twister.png',
    new: false,
    hit: true,
  }, {
    id: 10,
    name: 'Твистер',
    price: 144,
    delivery: true,
    img: 'twister.png',
    new: false,
    hit: true,
  }, {
    id: 11,
    name: 'Боксмастер',
    price: 144,
    delivery: true,
    img: 'twister.png',
    new: true,
    hit: false,
  }, {
    id: 12,
    name: '3 Стрипса',
    price: 144,
    delivery: true,
    img: 'chicken.png',
    new: false,
    hit: true,
  }, {
    id: 13,
    name: '3 Стрипса',
    price: 144,
    delivery: true,
    img: 'chicken.png',
    new: false,
    hit: true,
  }, {
    id: 14,
    name: '3 Стрипса',
    price: 144,
    delivery: true,
    img: 'chicken.png',
    new: false,
    hit: false,
  }, {
    id: 15,
    name: '3 Стрипса',
    price: 144,
    delivery: true,
    img: 'chicken.png',
    new: false,
    hit: false,
  },
];

const getElementById = (data, id) => data.find(el => el.id === id);

const api = {
  getAllCategories: () => new Promise(resolve => {
    setTimeout(() => resolve({ data: dataCategories }), 2000)
  }),
  getCategoryById: (id) => new Promise(resolve => {
    setTimeout(() => resolve({ data: getElementById(dataCategories, id)}), 1000)
  }),
  getAllGoods: () => new Promise(resolve => {
    setTimeout(() => resolve({ data: dataGoods }), 2000)
  }),
  getGoodsById: (id) => new Promise(resolve => {
    setTimeout(() => resolve({ data: getElementById(dataGoods, id)}), 1000)
  }),
}

export default api;
