import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerItems = document.querySelector("div.gallery");
const galleryMarkup = createElementGalleryMarkup(galleryItems);
containerItems.insertAdjacentHTML("beforeend", galleryMarkup);
containerItems.addEventListener("click", onImageClick);
let instance = {};

function createElementGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

function onImageClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();
  createLightbox(evt.target.dataset.source);
  document.addEventListener("keydown", onPressingTheModalEscape);
}

function createLightbox(url) {
  instance = basicLightbox.create(`<img src="${url}">`, {
    onClose: (instance) => {
      document.removeEventListener("keydown", onPressingTheModalEscape);
    },
  });
  instance.show();
}

function onPressingTheModalEscape(evt) {
  if (evt.key !== "Escape") {
    return;
  }
  instance.close();
}
