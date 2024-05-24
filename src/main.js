import { imagesTemplate } from './js/render-functions.js';
import { getPhotos, requestParams } from './js/pixabay-api.js';
import { noImageMessage, responseError, noMoreImages } from './js/iziToast.js';

import { refs, lightBox, loader, loadButton } from './js/variables.js';
import flatpickr from 'flatpickr';

refs.requestForm.addEventListener('submit', e => {
  e.preventDefault();

  requestParams.query = e.currentTarget.elements.query.value.trim();
  refs.galleryCont.innerHTML = '';
  requestParams.page = 1;
  loadButton.hide();

  callPixabeyAPI();

  e.currentTarget.reset();
});

refs.loadMoreBtn.addEventListener('click', e => {
  requestParams.page += 1;
  callPixabeyAPI();
});

async function callPixabeyAPI() {
  loader.show();
  try {
    const {
      data: { hits, totalHits },
    } = await getPhotos();

    requestParams.total_hits = totalHits;

    totalHits === 0
      ? noImageMessage()
      : refs.galleryCont.insertAdjacentHTML('beforeend', imagesTemplate(hits));

    lightBox.refresh();

    if (requestParams.page > 1) scrollPage();

    updateBtnStatus();
    loader.hide();
  } catch (error) {
    responseError(error.message);
    loader.hide();
  }
}

function updateBtnStatus() {
  const maxPages = Math.ceil(requestParams.total_hits / requestParams.per_page);
  if (requestParams.page <= maxPages && !loadButton.isActive) {
    loadButton.show();
  }
  if (requestParams.page >= maxPages && loadButton.isActive) {
    noMoreImages();
    loadButton.hide();
  }
}

function scrollPage() {
  const { height: cardHeight } =
    refs.galleryCont.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 3,
    behavior: 'smooth',
  });
}
