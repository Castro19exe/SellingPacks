"use strict"

fetch('http://localhost:5000/api/texto')
.then(res => res.json())
.then(data => {

    console.log(data);

    const section = document.querySelector(".packs-section")
    const section2 = document.querySelector("#packs-info");

    criarPack();

    function criarPack() {
        for (const [index, pack] of data.entries()) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            let h1 = document.createElement("h1");
            let p = document.createElement("p");

            section.appendChild(div);
            div.appendChild(img);
            div.appendChild(h1);
            div.appendChild(p);

            div.classList.add('pack');
            img.classList.add('img-pack');
            h1.classList.add('name-pack');
            p.classList.add('description-pack');

            div.setAttribute("data-pack", index)
            img.setAttribute("src", pack.imagem);
            h1.setAttribute("alt", pack.nome);
            
            h1.textContent = pack.nome;
            p.textContent= pack.descricao;



            div.addEventListener("click", clicarPack);
        }

        function clicarPack(e, pack) {
            // window.location.href = "/Pack";

            const divClicked = e.currentTarget
            const dataId = divClicked.getAttribute('data-pack')
    
            section2.style.height = "min-content"

            section2.innerHTML = ""
    
            let imgMostrar = document.createElement("img");
            let h1Mostrar = document.createElement("h1");
            let pMostrar = document.createElement("p");
    
            section2.appendChild(imgMostrar);
            section2.appendChild(h1Mostrar);
            section2.appendChild(pMostrar);
    
            imgMostrar.setAttribute("src", data[dataId].imagem);
            h1Mostrar.textContent = data[dataId].nome;
            pMostrar.textContent= data[dataId].descricao;
    
            imgMostrar.classList.add('img-pack');
            h1Mostrar.classList.add('name-pack');
            pMostrar.classList.add('description-pack');
        }
        
    }

    

})

