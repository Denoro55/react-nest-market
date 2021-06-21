export const MOCK_SHOPS = [
  {
    id: 1,
    name: 'dns',
    label: 'DNS',
    image: 'https://www.dns-shop.ru/assets/fc87bcf/images/theme/miniature.png',
  },
  {
    id: 2,
    name: 'wildberries',
    label: 'Wildberries',
    image: 'https://wbcon.ru/wp-content/uploads/2019/10/WB.jpg',
  },
  {
    id: 3,
    name: 'amazon',
    label: 'Amazon',
    image: 'http://www.equiti.com/media/11666/amazon.jpg',
  },
];

export const MOCK_CATEGORIES = [
  {
    id: 1,
    name: 'appliances',
    label: 'Бытовая техника',
    shop: 'dns',
  },
  {
    id: 2,
    name: 'phones',
    label: 'Смартфоны и гаджеты',
    shop: 'dns',
  },
  { id: 3, name: 'tv', label: 'ТВ и мультимедиа', shop: 'dns' },
  { id: 4, name: 'pc', label: 'Компьютеры', shop: 'dns' },
  { id: 5, name: 'office', label: 'Офис и сеть', shop: 'dns' },
  {
    id: 6,
    name: 'drying',
    label: 'Стирка и сушка',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 7,
    name: 'cleaning',
    label: 'Уборка',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 8,
    name: 'summerClimate',
    label: 'Летний климат',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 9,
    name: 'winterClimate',
    label: 'Зимний климат',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 10,
    name: 'smartHouse',
    label: 'Умный дом',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 11,
    name: 'clock',
    label: 'Часы',
    shop: 'dns',
    parentName: 'appliances',
  },
  {
    id: 12,
    name: 'laptops',
    label: 'Ноутбуки',
    shop: 'dns',
    parentName: 'pc',
  },
  {
    id: 13,
    name: 'monoblocks',
    label: 'Моноболоки',
    shop: 'dns',
    parentName: 'pc',
  },
  {
    id: 14,
    name: 'videoCards',
    label: 'Видеокарты',
    shop: 'dns',
    parentName: 'pc',
  },
  {
    id: 15,
    name: 'monitors',
    label: 'Мониторы',
    shop: 'dns',
    parentName: 'pc',
  },
  { id: 16, name: 'shoes', label: 'Обувь', shop: 'wildberries' },
  {
    id: 17,
    name: 'accessories',
    label: 'Аксессуары',
    shop: 'wildberries',
  },
  {
    id: 18,
    name: 'electorincs',
    label: 'Электроника',
    shop: 'wildberries',
  },
];

export const MOCK_PRODUCTS = [
  {
    id: 1,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/671dd8830933f759d97e2ddc3630826d/18b9d168e6ec7856402a9662a3197aa1313559d8f749f63b0776469deb62e434.jpg',
    name: 'Стиральные машины',
    shop: 'dns',
    price: 10000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 2,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/860b76d2ca66b32b77bf560ac95a5458/9cdfe4f88b3d2c00211099cb3ee29a5ba1ef3246423be76fa64fc27755e2591c.jpg',
    name: 'Полуавтоматические стиральные машины',
    shop: 'dns',
    price: 16000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 3,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/3da7c1e7319a354960f2bd2a207f2229/5507f7b8f11b89b020122fb165ee4562a6a36bdab195237a1cc4db92b516c831.jpg',
    name: 'Встраиваемые стиральные машины',
    shop: 'dns',
    price: 8000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 4,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/5a25c74b23dfc7bf9337d02d3127760c/6eba16ff4ec2365d96aab990491184ac1501f0da36b1fc4c6236353fbb1e6f61.jpg',
    name: 'Сушильные машины',
    shop: 'dns',
    price: 25000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 5,
    image:
      'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/fc4e752a11f4d3b26752e817a024dfe1/26cc73be57189e352ae6ef82d4081aa84118948e7aaa3e931ec774aa410c1331.jpg',
    name: 'Сушилки для белья и обуви',
    shop: 'dns',
    price: 15000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 6,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/d8224d84f902791422de3551a783856b/eff9d29950514b3ac4fecf6148e600a848d608efa6ddc4bb14e4e9f9a10f81e4.jpg',
    name: 'Аксессуары к стиральным и посудомоечным машинам',
    shop: 'dns',
    price: 20000,
    category: 'appliances',
    subCategory: 'drying',
  },
  {
    id: 7,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/4a3fdf5564c241d597bc627505459fea/2a0d9f0239f1627101881dbb3bad19769a3101a0f5014268caee8af216b26cdd.jpg',
    name: 'Пылесосы',
    shop: 'dns',
    price: 5000,
    category: 'appliances',
    subCategory: 'cleaning',
  },
  {
    id: 8,
    image:
      'https://c.dns-shop.ru/thumb/st4/fit_width/120/120/32e5faf29a5ec89b33de7945f2281ea3/26d6863b660c4424326bd41cada8d49786e8ff1fddbfda31a9bcb820087caea7.jpg',
    name: 'Вертикальные пылесосы',
    shop: 'dns',
    price: 8500,
    category: 'appliances',
    subCategory: 'cleaning',
  },
  {
    id: 9,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/4d0e0f7ce0a1e924bb47df7f791139b3/f738af414905480690c13df70af772698cb667780c7a21d11c32091b1d817304.jpg',
    name: 'Роботы-пылесосы',
    shop: 'dns',
    price: 10000,
    category: 'appliances',
    subCategory: 'cleaning',
  },
  ,
  {
    id: 10,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/2e51ccc9bf1eba47925935c72d8b32d0/c021455d2d6c57e97a2617bbefd62af83a248740b926037a6e942194bab86927.jpg',
    name: 'Кондиционеры (сплит-системы)',
    shop: 'dns',
    price: 12000,
    category: 'appliances',
    subCategory: 'summerClimate',
  },
  ,
  {
    id: 11,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/65bf2360e4de36d269759d5a44a297fc/11800afd13ff8dad6acb09436292ae61903c59b947eb9c721561d7d37aba4a2a.jpg',
    name: 'Мобильные кондиционеры',
    shop: 'dns',
    price: 30000,
    category: 'appliances',
    subCategory: 'summerClimate',
  },
  ,
  {
    id: 12,
    image:
      'https://c.dns-shop.ru/thumb/st1/fit_width/120/120/146dc0e2869216eec56abbab30ff5dc8/14348332b9a2fd53fbc071f47e06b908358b0ad52daa676b4aa58da7d9ec4c4e.jpg',
    name: 'Вентиляторы',
    shop: 'dns',
    price: 40000,
    category: 'appliances',
    subCategory: 'summerClimate',
  },
];
