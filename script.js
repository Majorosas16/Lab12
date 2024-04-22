import { cargaPersonajes } from "./util.js";

const render =  async () => {
    const respuesta = await cargaPersonajes();
    console.log(respuesta);

    const Personaje = document.querySelector(".Personaje");
    Personaje.classList.add("personaje");

    for (const item of respuesta){
        
        const card= document.createElement("div");
        card.classList.add("card")

        const divPersoIma= document.createElement("div");

        const imgPersonaje = document.createElement("div");
        const img = document.createElement("img");
        img.src=item.displayIcon;
        img.alt=item.displayName;
        imgPersonaje.appendChild(img);

        divPersoIma.appendChild(imgPersonaje);
        card.appendChild(divPersoIma);
        Personaje.appendChild(card);

        const divPersoTxt = document.createElement("div");
        divPersoTxt.classList.add("texto");

        const title = document.createElement("H1");
        title.textContent=item.displayName;

        const subTitle= document.createElement("p");
        subTitle.textContent=item.description;
        subTitle.classList.add("p");

        divPersoTxt.appendChild(title);
        divPersoTxt.appendChild(subTitle);
        card.appendChild(divPersoTxt);
        Personaje.appendChild(card);

        const divBtnIcon = document.createElement("div");
        divBtnIcon.classList.add("contenedorbtn");

        const btn = document.createElement("button");
        btn.src="#";
        btn.textContent="Ver Información detallada";
        btn.classList.add("btn");

        btn.addEventListener("click", () => {
            window.location.href = `./detail.html?id=${item.uuid}`;  
          });

        divBtnIcon.appendChild(btn);
        divPersoTxt.appendChild(divBtnIcon);
        card.appendChild(divPersoTxt);
        Personaje.appendChild(card);


        const basurita = document.createElement("img");
        basurita.src= "Resources/trash3.svg"
        basurita.alt= "trash";
        basurita.classList.add("basurita")

        
        divBtnIcon.appendChild(basurita);
        divPersoTxt.appendChild(divBtnIcon);
        card.appendChild(divPersoTxt);
        Personaje.appendChild(card);

     
        // const btn2 = document.createElement("button");
        // btn2.src="#";
        // btn2.textContent="Ver Información detallada";  
        
        // divBtnIcon.appendChild(btn2);
        // divPersoTxt.appendChild(divBtnIcon);
        // Personaje.appendChild(divPersoTxt);

        // btn2.addEventListener("click", () => {
        //     Personaje.style.visibility = "hidden"
        //    });

    }
};
document.addEventListener("DOMContentLoaded", render);
