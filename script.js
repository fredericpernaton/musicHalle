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
       <img class="image"src="${instru.image}" alt="">
       <instruments class="instru"src="${instruments.inst}" alt="">
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
  function affichelesAvantagesClients(Clients){`
    Clients.forEach(c=>{
        console.log(c)
        document.querySelector("#Clients").innerHTML+=
  })`





  }

function afficheLesTemoignages(Temoignages){
    Temoignages.forEach(t =>{
        console.log(t)
        document.querySelector("#temoignages").innerHTML+=`
        <div>
        <h3>${t.prenom}</h3>
        <h4>${t.typeExperience}</h4>
        <p>${t.commentaire}</p>
        <p>${t.note}</p>
        </div>
        `
    })
}
















