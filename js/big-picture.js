import { ESCAPE__KEY } from './utils';

const COMMENTS_PER_PAGE = 5;

const bigPictureElement = document.querySelector('.big-picture');
const commentShownCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const commentTotalCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, message }) => {
  const comment = commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

function calculateShownComments() {
  commentsShown += COMMENTS_PER_PAGE;

  if (commentsShown >= comments.length) {
    commentsShown = comments.length;
  }

  return commentsShown;
}

function renderComments() {
  const shownComments = calculateShownComments();

  commentsLoaderElement.classList.toggle('hidden', shownComments >= comments.length);

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < shownComments; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commentShownCountElement.textContent = shownComments;
  commentTotalCountElement.textContent = comments.length;
}

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
};

function onDocumentKeydown(evt) {
  if (evt.key === ESCAPE__KEY) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentsLoaderClick = () => renderComments();

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { showBigPicture };
