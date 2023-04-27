let ALBUM_URL = 'https://api.pexels.com/v1/search?query='
let APIKey = "kYGa1Y18YbcirGDBp8rRIkMlIfnK1MdxjrNxyfGILGfXrEZkF4ahTOaN"
let firstAlbum = 'https://api.pexels.com/v1/search?query=japan'
let secondAlbum = 'https://api.pexels.com/v1/search?query=norway'
let loadButton = document.getElementsByClassName('btn-primary')[0]
let secondaryLoadButton = document.getElementsByClassName('btn-secondary')[0]

displayPhotos = function(data) {
    let rowReference = document.getElementById('row')
    rowReference.innerHTML = ''
    data.forEach(data => {
        let newCol = document.createElement('div');
        newCol.classList.add('col-md-4');
        newCol.innerHTML = `
        <div class="card mb-4 shadow-sm">
        <img src=${data.src.medium} style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">${data.alt}</h5>
                <p class="card-text">
                ${data.photographer}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${data.id}</small>
                </div>
              </div>
            </div>
        `;
        rowReference.appendChild(newCol);
    })

}

loadButton.addEventListener('click', ()=> {
    fetch(firstAlbum, {
        Method: "GET",
        headers: {
            Authorization: APIKey
        } 
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        }else {
            return new Error('Errore nella gestione della chiamata')
        }
    })
    .then((data) => {
        console.log('photos', data.photos)
        let photosArray = data.photos
        displayPhotos(photosArray)
    })
    .catch((err)=>{
        console.log(err)
    })
}
)
secondaryLoadButton.addEventListener('click', ()=> {
    fetch(secondAlbum, {
        Method: "GET",
        headers: {
            Authorization: APIKey
        } 
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        }else {
            return new Error('Errore nella gestione della chiamata')
        }
    })
    .then((data) => {
        console.log('photos', data.photos)
        let photosArray = data.photos
        displayPhotos(photosArray)
    })
    .catch((err)=>{
        console.log(err)
    })
}
)
