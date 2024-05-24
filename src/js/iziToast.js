import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/blocked.svg';

export function noImageMessage() {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: 'black',
    color: 'red',
    position: 'topRight',
    timeout: 3000,
    close: true,
    progressBar: true,
    iconUrl: icon,
  });
}
export function noMoreImages() {
  iziToast.show({
    message: "We're sorry, but you've reached the end of search results.",
    messageColor: 'black',
    color: 'blue',
    position: 'topRight',
    timeout: 3000,
    close: true,
    progressBar: true,
  });
}

export function responseError(errorMessage) {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: errorMessage,
  });
}
