import { cargaPersonajes } from "./util.js";

const render =  async () => {
    const respuesta = await cargaPersonajes();
    console.log(respuesta);

    const Personaje = document.querySelector(".Personaje");
    console.log(Personaje);

    for (const item of respuesta){

        const divPersonajes = document.createElement("div");

        const imgPersonaje = document.createElement("div");
        const img = document.createElement("img");
        img.src=item.displayIcon;
        img.alt=item.displayName;
        imgPersonaje.appendChild(img);

        divPersonajes.appendChild(imgPersonaje);
        Personaje.appendChild(divPersonajes);


    }
};
document.addEventListener("DOMContentLoaded", render);
