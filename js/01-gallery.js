import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const elGalleryMarkup = createElGalleryMarkup(galleryItems);

function createElGalleryMarkup (images) {
    return images.map(image =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`).join(''); 
};

gallery.innerHTML = elGalleryMarkup;
