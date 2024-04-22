import { cargaPersonajes } from "./util.js";

const render =  async () => {
    const respuesta = await cargaPersonajes();
    console.log(respuesta);

    const Personaje = document.querySelector(".Personaje");

    for (const item of respuesta){

        const divPersoIma= document.createElement("div");

        const imgPersonaje = document.createElement("div");
        const img = document.createElement("img");
        img.src=item.displayIcon;
        img.alt=item.displayName;
        imgPersonaje.appendChild(img);

        divPersoIma.appendChild(imgPersonaje);
        Personaje.appendChild(divPersoIma);

        const divPersoTxt = document.createElement("div");

        const title = document.createElement("H1");
        title.textContent=item.displayName;
        const subTitle= document.createElement("p");
        subTitle.textContent=item.description;

        divPersoTxt.appendChild(title);
        divPersoTxt.appendChild(subTitle);
        Personaje.appendChild(divPersoTxt);

        const divBtnIcon = document.createElement("div");

        const btn = document.createElement("button");
        btn.src="#";
        btn.textContent="Ver Información detallada";

        btn.addEventListener("click", () => {
            window.location.href = `./detail.html?id=${item.uuid}`;  
          });

        divBtnIcon.appendChild(btn);
        divPersoTxt.appendChild(divBtnIcon);
        Personaje.appendChild(divPersoTxt);


        const basurita = document.createElement("img");
        basurita.src= "Resources/trash3.svg"
        basurita.alt= "trash";

        // basurita.addEventListener("click", () => {
        //     divBtnIcon.disabled = true;
        //   });

        divBtnIcon.appendChild(basurita);
        divPersoTxt.appendChild(divBtnIcon);
        Personaje.appendChild(divPersoTxt);





    }
};
document.addEventListener("DOMContentLoaded", render);
