fetch('./data/moovies.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('Response json :', data)
    console.log(data[0].Director)


    let div = document.querySelector('.moovies')

    data.forEach(moovies => {
      div.innerHTML += 
      `<div class="moovies card m-5 mb-3 p-3 " style="max-width: 1000px;">
      <div class="row g-0">
        <div class="col-md-4 ps-5 g-5">
          <img src=${moovies.Poster}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">${moovies.Title}</h2>
            <p> Year: ${moovies.Year} <br> Director: ${moovies.Director} <br> Actors: ${moovies.Actors} <br> Runtime: ${moovies.Runtime} <br> Plot: ${moovies.Plot}</p>
              <p class="card-text"><small class="text-muted"> Metacritic: ${moovies.Metascore}</small></p>
    
              <div class="images"> 
              <div class="container text-center">
              <div class="row align-items-start" style="max-width: 500px;">
                          
                  <div class="col-4">
                   <img src=${moovies.Images[0]} class="img-thumbnail border border-0">
                  </div>
    
                  <div class="col-4">
                   <img src=${moovies.Images[1]} class="img-thumbnail border border-0">
                  </div>
    
                  <div class="col-4">
                   <img src=${moovies.Images[2]} class="img-thumbnail border border-0">
                  </div>
    
              </div>
              </div>
              </div>
              
            </div>
         </div>
       </div>
    </div>`
  })

})



let ville = 'Roanne';
recevoirTemperature(ville);

let button = document.querySelector('#changer');
button.addEventListener('click', () => {
  ville = prompt('Choisissez une ville :');
  recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ville = reponse.name;
        let temperature = reponse.main.temp;
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}
