import {galleryItems} from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsRef = galleryItems
  .map(({preview, original, description}) => {
    return `<div class = "gallery__item"><a class = "gallery__link" href= "${original}"><img  class = "gallery__image" data-source = "${original}" src = ${preview} alt = "${description}"></a></div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItemsRef);

gallery.addEventListener("click", selectGalleryEl);

const instance = basicLightbox.create(`<img src="" alt="">`, {
  onShow: () => document.addEventListener("keydown", onKeydownEsc),
  onClose: () => document.removeEventListener("keydown", onKeydownEsc),
});

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const image = instance.element().querySelector("img");
  image.src = event.target.dataset.source;
  image.alt = event.target.alt;
  instance.show();
}
function onKeydownEsc(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
