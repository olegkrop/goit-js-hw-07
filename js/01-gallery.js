import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const galleryMarkupArrey = ({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`;

const createGalleryMarkup = array => array
    .map(galleryMarkupArrey)
    .join('');

const addMarkup = markup => galleryElement
    .insertAdjacentHTML('beforeend', markup);

addMarkup(createGalleryMarkup(galleryItems));

galleryElement.addEventListener('click', onGalleryClick);

function onGalleryClick(element) {
    if (element.target.nodeName !== 'IMG') return;
    element.preventDefault();
    const modalOptions = {
        onShow: () => window.addEventListener('keydown', onEscapeKey),
        onClose: () => window.removeEventListener('keydown', onEscapeKey),
    };

    const modal = basicLightbox.create(
        `<img src="${element.target.dataset.source}"width="1400" height="900">`,
        modalOptions);

    function onEscapeKey(element) {
        if (element.code === 'Escape') {
            modal.close();
        }
    }
    modal.show();
};