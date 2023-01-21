import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const containerItems = document.querySelector("ul.gallery");
const galleryMarkup = createElementGalleryMarkup(galleryItems);
containerItems.insertAdjacentHTML("beforeend", galleryMarkup);

function createElementGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `</a>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
