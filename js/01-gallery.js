import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
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
    //блокируем переход по ссылке по умолчанию
    evt.preventDefault();
    // console.log(evt.target); то где кликнули
    // console.log(evt.currentTarget); то где поймали клик
    
    if (evt.target.nodeName !== 'IMG') {
        return
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img
            class="gallery__image" src="${evt.target.dataset.source}" width="800" heigth="600"
            />
    </div>
`)

    instance.show()
    
    window.addEventListener('keydown', onEscKeyPress);
    function onEscKeyPress(event) {
        // console.log(event.code );
          if (event.code === 'Escape') {
              instance.close()
              window.removeEventListener('keydown', onEscKeyPress);
          }
        }
        //     window.addEventListener('keydown', (event) => {
//         console.log(event.code);
//         if (event.code === 'Escape') {
//             instance.close()
//   }
//     }    
//     );
    
}
