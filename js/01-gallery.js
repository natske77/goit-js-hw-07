import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const photoGallery = document.querySelector('.gallery');

photoGallery.innerHTML = markupGalleryItems(galleryItems);
photoGallery.addEventListener('click', evt => {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    onToggleModal(evt.target.dataset.source);
});

photoGallery.querySelectorAll(".gallery__link")
    .forEach(link =>
        link.addEventListener('click', evt => {
            evt.preventDefault();
        })
);
    

function markupGalleryItems(items) {
    return items.map(item =>
        `<li class="gallery__item">
             <a class="gallery__link" href="${item.original}">
              <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
               alt="${item.description}"
               />
             </a>
        </li>`
    ).join('');
};

function onToggleModal(link) {
  const instance = basicLightbox.create(
    `<img src="${link}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );

  instance.show();

  function onCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}