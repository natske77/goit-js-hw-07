import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoGallery = document.querySelector('.gallery');
photoGallery.innerHTML = markupGalleryItems(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

function markupGalleryItems(items) {
    return items.map(item =>
        `<li class="galery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </li>`
    ).join('');
};