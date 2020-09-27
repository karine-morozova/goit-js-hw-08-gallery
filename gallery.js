import galleryItems from "./gallery-items.js"

  const galleryEl = document.querySelector(".js-gallery");
  const modalEl = document.querySelector(".js-lightbox");
  // const galleryItemEl = document.querySelector(".gallery__item");
const overlayEl = document.querySelector(".lightbox__overlay");
// const modalContentEl = document.querySelector(".lightbox__content");
const modalImgEl = document.querySelector(".lightbox__image");
const closeBtnEl = document.querySelector(".lightbox__button");

   const galleryListEl = createGalleryList(galleryItems);

   galleryEl.insertAdjacentHTML("beforeend",galleryListEl);

  
   galleryEl.addEventListener("click", onOpenModal);
   closeBtnEl.addEventListener("click", onCloseModal);
   overlayEl.addEventListener("click", onCloseModalOnOverlay);
  window.addEventListener("keypress", onCloseModalByEsc);
  function createGalleryList(img) {
    return  img.map(({original, description, preview}) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`}).join("");
  }  

 function onOpenModal (event) {
   event.preventDefault();
   if(event.target.nodeName !== "IMG") { 
     return
    };
    
    modalEl.classList.add("is-open");
    modalImgEl.src = event.currentTarget.src;
    modalImgEl.alt = event.currentTarget.alt;

 }

 function onCloseModal (event) {
  modalEl.classList.remove("is-open");
  modalImgEl.src = "";
    

 }
 function onCloseModalOnOverlay (event) {
   if (event.currentTarget === event.target) {
    onCloseModal();
   }
 }

 function onCloseModalByEsc (event) {
   if (event.code === "Escape") {
     onCloseModal();
   }
 }

 