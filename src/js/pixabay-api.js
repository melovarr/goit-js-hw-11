import axios from "axios";
const API_KEY = "49624425-89d18311d8423019c2709bd63";

const nameInput = document.querySelector(".js-name-input");
const formInput = document.querySelector(".js-form");
const gallery = document.querySelector(".gallery");

fetchImages();


function fetchImages() {
    axios(`https://pixabay.com/api/?key=${API_KEY}&q=${nameInput.value}&image-type=photo&orientation=horizontal&safesearch=true`)
    .then(response => {
        console.log(response.data.hits);
        gallery.insertAdjacentHTML("beforeend", galleryDatalist(response.data.hits))
    })
    .catch(error => console.log(error.message))
}

function galleryDatalist(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
<ul class="description">
<li class="descr-item"><p class="descr-item-title">Likes</p><p class="descr-item-value">${likes}</p></li>
<li class="descr-item"><p class="descr-item-title">Views</p><p class="descr-item-value">${views}</p></li>
<li class="descr-item"><p class="descr-item-title">Comments</p><p class="descr-item-value">${comments}</p></li>
<li class="descr-item"><p class="descr-item-title">Downloads</p><p class="descr-item-value">${downloads}</p></li>
</ul>
    </a>
    </li>`).join("")
}