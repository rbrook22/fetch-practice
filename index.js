var joker = document.querySelector('#trigger');
joker.addEventListener('click', loadJoke)

function loadJoke(){
    var url='https://api.chucknorris.io/jokes/random';
    fetch('https://api.chucknorris.io/jokes/random').then(function(response){
        return response.json()
        }).then(function(json){
            console.log(json)
            let html = '<div><img src="json.icon_iamge+">'+json.value+'</div>'
            document.querySelector('#output').innerHTML = html;
        }).catch(function(error){
            console.log(error);
        })
}