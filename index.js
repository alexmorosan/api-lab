document.addEventListener('DOMContentLoaded', function(){
    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function(result){
        
        // Select beet image
        let beerImg = result.data[0].beer_label
        
        // Create img HTML element
        let beer = document.createElement('img')
        
        // add image source to img element
        beer.src = beerImg
        
        // append image to document body
        document.body.appendChild(beer)

    })
})