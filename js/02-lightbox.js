import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const galleryMarkupArrey = ({ preview, original, description }) =>
  `<li>
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
   </li>`;

const createGalleryMarkup = array => array
  .map(galleryMarkupArrey)
  .join('');

const addMarkup = markup => galleryElement
  .insertAdjacentHTML('beforeend', markup);

addMarkup(createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.5,
  captionPosition: "bottom",
  captionClass: "gallery__image--caption",
  showCounter: true,
});