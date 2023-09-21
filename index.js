   button=document.getElementById('botao').addEventListener('click',function(){


    let nome =document.getElementById('nome-pokemon').value
    fetch('https://pokeapi.co/api/v2/pokemon/'+nome)
    .then(function(response){
        return response.json()
    }) .then(function(response){

        let html_habilidades=''
       console.log(response.sprites.front_default)
       console.log(response.abilities)
 for (const hab of response.abilities){
    html_habilidades+='<li>'+hab.ability.name+'</li>'
    console.log(hab)
 }
 let lista=document.getElementById('habilidades')
 lista.innerHTML=html_habilidades
       let url =response.sprites.front_default
       document.getElementById('img-card').setAttribute('src',url)
})
})
