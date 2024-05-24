// #region Simple light box

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// #endregion

// #region Query Selectors

export const refs = {
  requestForm: document.querySelector('.js-request-form'),
  galleryCont: document.querySelector('.js-gallery'),
  imageLoader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

// #endregion

// #region Hidden Elements

export const loader = {
  show() {
    refs.imageLoader.classList.remove('hide');
  },
  hide() {
    refs.imageLoader.classList.add('hide');
  },
};

export const loadButton = {
  isActive: false,
  show() {
    refs.loadMoreBtn.classList.remove('hide');
    this.isActive = true;
  },
  hide() {
    refs.loadMoreBtn.classList.add('hide');
    this.isActive = false;
  },
};

// #endregion
