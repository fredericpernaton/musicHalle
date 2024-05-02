fetch("instrumentsMusiques.json")
.then(rep=>{
    return rep.json()
})
.then(data=>{
    console.log(data.entreprise.produits)
    affichelesInstruments(data.entreprise.produits)
    affichelesServices(data.entreprise.Services)
})

function affichelesInstruments(instruments){
    // instruments : le tableau de produits
    // pour chacun des instruments du tableau : 
    instruments.forEach(instru => {
        
    
       // construire une petite carte
       // l'ajouter dans la div qui a l'id instruments
       document.querySelector("#instruments").innerHTML +=`<div class="card">
       <img src="${instru.image}" alt="">
       <h4>${instru.nom}</h4>
       <p>${instru.description}</p>
   </div>
   `
    });
}

  function affichelesServices(Services){
    Services.forEach(s=>{
        console.log(s)
        document.querySelector("#Services").innerHTML+=` <div class="carte-service">
        <img src="" alt="">
        <h4>Nom du service</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero a dolore nulla? Dolore repellat, enim quod totam sit tenetur, iure officiis exercitationem dolores, velit distinctio officia illum suscipit. Accusantium, a?</p>
        <a href="" class="bouton"></a>
    </div>`
    })
  }

