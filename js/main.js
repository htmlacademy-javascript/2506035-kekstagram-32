const PICTURE_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;
const NAMES = ['Алексей', 'Светлана', 'Максим', 'Ольга', 'Иван', 'Екатерина', 'Николай', 'Анна', 'Дмитрий', 'София', 'Лукас',
  'Эмилия', 'Оливер', 'Изабель', 'Джон'];
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Городская джунгли-вайб, где каждый уголок – это стори. #город #вайб #стори',
  'Закаты, что заставляют забыть про все дела. #закат #релакс #кайф',
  'Тихая гармония природы, запечатленная в одном кадре. #природа #гармония #фото',
  '#архитектура #история #линии',
  'Классно',
  'Зимний фриз – когда мир вокруг замирает в ожидании чуда. #зима #фриз #чудо',
  'Каждая улыбка на фото – это история радости. #улыбка #счастье #момент',
  'Ночной город, оживший в свете фонарей. #ночь #город #свет',
  'Спорт – это не просто тренировки, это лайфстайл. #спорт #лайфстайл #мотивация',
  'Книжный мирок – твой тикет в неведомое. #книги #мирок #путешествие',
  'Под покровом звезд – каждый может найти свою сказку. #звезды #сказка #ночь'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from(
    {length: getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)},
    createComment
  )
});

const getPicture = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1)
);

getPicture();
// console.log(getPicture());
