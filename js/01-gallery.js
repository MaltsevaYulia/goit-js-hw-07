import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galaryContainer=document.querySelector('.gallery')
const galaryMarkup = createGalaryMarkup(galleryItems);
galaryContainer.insertAdjacentHTML('beforeend',galaryMarkup)

function createGalaryMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) =>
        `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    ).join('')

}

galaryContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {
    console.log(evt.target);
}
