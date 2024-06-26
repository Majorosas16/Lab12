import { cargaPersonajes } from "./util.js";

const render = async () => {
  const respuesta = await cargaPersonajes();

  //Traigo el section del index
  const Personaje = document.querySelector(".Personaje");
  Personaje.classList.add("personaje");

  for (const item of respuesta) {
    //Card es el que contiene la img, los textos y el boton
    const card = document.createElement("div");
    card.classList.add("card");

    //Div de la imagen del personaje
    const divPersoIma = document.createElement("div");
    const imgPersonaje = document.createElement("div");

    const img = document.createElement("img");
    img.src = item.displayIcon;
    img.alt = item.displayName;
    imgPersonaje.appendChild(img);
    divPersoIma.classList.add("img");

    divPersoIma.addEventListener("click", () => {
      window.location.href = `./detail.html?id=${item.uuid}`;
    });

    divPersoIma.appendChild(imgPersonaje);
    card.appendChild(divPersoIma);
    Personaje.appendChild(card);

    //Div de los textos y botones
    const divPersoTxt = document.createElement("div");
    divPersoTxt.classList.add("texto");

    const title = document.createElement("H1");
    title.textContent = item.displayName;

    const subTitle = document.createElement("p");
    subTitle.textContent = item.description;
    subTitle.classList.add("p");

    divPersoTxt.appendChild(title);
    divPersoTxt.appendChild(subTitle);
    card.appendChild(divPersoTxt);
    Personaje.appendChild(card);

    //Div del boton y la img
    const divBtnIcon = document.createElement("div");
    divBtnIcon.classList.add("contenedorbtn");

    const btn = document.createElement("button");
    btn.src = "#";
    btn.textContent = "See details";
    btn.classList.add("btn");

    btn.addEventListener("click", () => {
      window.location.href = `./detail.html?id=${item.uuid}`;
    });

    const basurita = document.createElement("img");
    basurita.src = "Resources/trash3.svg";
    basurita.alt = "trash";
    basurita.classList.add("basurita");

    divBtnIcon.appendChild(btn);
    divPersoTxt.appendChild(divBtnIcon);
    card.appendChild(divPersoTxt);
    Personaje.appendChild(card);
    divBtnIcon.appendChild(basurita);
    divPersoTxt.appendChild(divBtnIcon);
    card.appendChild(divPersoTxt);
    Personaje.appendChild(card);

    //Se borra el card en específico
    basurita.addEventListener("click", () => {
      card.remove();
    });
  }
};
document.addEventListener("DOMContentLoaded", render);
