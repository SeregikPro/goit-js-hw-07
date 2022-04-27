import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const elGalleryMarkup = createElGalleryMarkup(galleryItems);

function createElGalleryMarkup (images) {
    return images.map(image =>
        `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</div>`).join(''); 
};

gallery.innerHTML = elGalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', 
{docClose: false,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});




