// createGallery(images).Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250, // затримка перед показом підпису
  animationSpeed: 120, // швидкість анімації
  fadeSpeed: 80, // швидкість затемнення
  preloading: true,
});

const ulGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
function imageTemplate(image) {
  return `<li>
        <a href="${image.largeImageURL}">
          <div>
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </div>
          <div class="info">
            <div class="info-item">
              <b>Likes</b>
              <span>${image.likes}</span>
            </div>
            <div class="info-item">
              <b>Views</b>
              <span>${image.views}</span>
            </div>
            <div class="info-item">
              <b>Comments</b>
              <span>${image.comments}</span>
            </div>
            <div class="info-item">
              <b>Downloads</b>
              <span>${image.downloads}</span>
            </div>
          </div>
        </a>
      </li>`;
}
function imagesTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

export function createGallery(images) {
  const markup = imagesTemplate(images);
  ulGallery.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
export function clearGallery() {
  ulGallery.innerHTML = '';
}
export function showLoader() {
  loader.style.display = 'block';
}
export function hideLoader() {
  loader.style.display = 'none';
}
