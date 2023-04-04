import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoGallery = document.querySelector('.gallery');
photoGallery.innerHTML = markupGalleryItems(galleryItems);

