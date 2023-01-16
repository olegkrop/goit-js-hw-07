import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const makeGalleryMarkupItem = ({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`;
console.log(makeGalleryMarkupItem);

const makeGalleryMarkup = array => array
    .map(makeGalleryMarkupItem)
    .join('');
const addMarkup = markup => gallery.insertAdjacentHTML('beforeend', markup);
const galleryMarkup = makeGalleryMarkup(galleryItems);

addMarkup(galleryMarkup);
console.log(addMarkup);


gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(element) {
    if (element.target.nodeName !== 'IMG') return;
    element.preventDefault();
    const modalOptions = {
        onShow: () => window.addEventListener('keydown', onEscapeKey),
        onClose: () => window.removeEventListener('keydown', onEscapeKey),
    };

    console.log(modalOptions);

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






// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// // console.log(galleryItems);
// const gallery = document.querySelector('.gallery');
// console.log(gallery);

// function makeGalleryMarkupItem({ preview, original, description }) {
//     return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
//         </a>
//     </div>`;
// };

// function makeGalleryMarkup(array) {
//     return array.map(makeGalleryMarkupItem).join('');
// };

// function addMarkup(markup) {
//     gallery.insertAdjacentHTML('afterbegin', markup);
// };

// const galleryMarkup = makeGalleryMarkup(galleryItems);

// addMarkup(galleryMarkup);


// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick(element) {
//     if (element.target.nodeName !== 'IMG') {
//         return;
//     }
//     element.preventDefault();
//     const modalOptions = {
//         onShow: () => {
//             window.addEventListener('keydown', onEscapeKey);
//         },
//         onClose: () => {
//             window.removeEventListener('keydown', onEscapeKey);
//         },
//     };

//     const modal = basicLightbox.create(
//         `<img src="${element.target.dataset.source}"width="1400" height="900">`,
//         modalOptions);

//     function onEscapeKey(element) {
//         if (element.code === 'Escape') {
//             modal.close();
//         }
//     }
//     modal.show();
// };
