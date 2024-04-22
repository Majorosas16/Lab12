import {personajePorId} from "./util.js"
const render =async () => {
    const params = new URLSearchParams(window.location.search);

    const id =params.get("id");

    const personaje = await personajePorId(id);

    const secPersonaje = document.querySelector(".Personaje");

    const divPersoIma= document.createElement("div");

    const imgPersonaje = document.createElement("div");
    const img = document.createElement("img");
    img.src=personaje.bustPortrait;
    img.alt=personaje.displayName;
    imgPersonaje.appendChild(img);

    divPersoIma.appendChild(imgPersonaje);
    secPersonaje .appendChild(divPersoIma);

    const divPersoTxt = document.createElement("div");

        const title = document.createElement("H1");
        title.textContent=personaje.displayName;
        const subTitle= document.createElement("p");
        subTitle.textContent=personaje.description;
        const rolTitle = document.createElement("H1");
        rolTitle.textContent="Role:";
        const rolSubtitle= document.createElement("p");
        rolSubtitle.textContent=personaje.role.description;

        divPersoTxt.appendChild(title);
        divPersoTxt.appendChild(subTitle);
        divPersoTxt.appendChild(rolTitle);
        divPersoTxt.appendChild(rolSubtitle);
        secPersonaje.appendChild(divPersoTxt);
    

}
document.addEventListener("DOMContentLoaded", render);