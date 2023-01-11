import { galleryItems } from './gallery-items.js';
// Change code below this line


const galaryContainer=document.querySelector('.gallery')
const galaryMarkup = createGalaryMarkup(galleryItems);
galaryContainer.insertAdjacentHTML('beforeend',galaryMarkup)

function createGalaryMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) =>
        `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    ).join('')

}

galaryContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {
    //блокируем переход по ссылке по умолчанию
    evt.preventDefault();
   
    if (evt.target.nodeName !== 'IMG') {
        return
    }

    const lightbox = new SimpleLightbox('.gallery a', { /* options */captionsData: 'alt',captionPosition:'bottom',captionDelay:	250 });

}
   
