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

  
   galleryEl.addEventListener("click", openModal);
   closeBtnEl.addEventListener("click", closeModal);
   overlayEl.addEventListener("click", closeModalOnOverlay);

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

 function openModal (event) {
   event.preventDefault();
   if(event.target.nodeName !== "IMG") { 
     return
    };
    
    modalEl.classList.add("is-open");
    modalImgEl.src = event.currentTarget.src;
    modalImgEl.alt = event.currentTarget.alt;

 }

 function closeModal (event) {
  modalEl.classList.remove("is-open");
  modalImgEl.src = "";
    

 }
 function closeModalOnOverlay (event) {
   if (event.currentTarget === event.target) {
    modalEl.classList.remove("is-open");
   }
 }

 