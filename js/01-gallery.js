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

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // ниже выражение взятое с сайта https://basiclightbox.electerious.com/
  // instance - их название. При showпоказывается ссылка из тега img. При close - закрывается модалка по Esc
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
  //<img src='${event.target.getAttribute(["data-source"])>`);
  // console.log(event.target);
  instance.show();

  const onKeydownEsc = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
  window.addEventListener("keydown", onKeydownEsc);
}
