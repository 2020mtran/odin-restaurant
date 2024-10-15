import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector("#content");

home();

document.querySelector('button:nth-child(1)').addEventListener('click', () => {
    content.textContent = '';
    home();
});

document.querySelector('button:nth-child(2)').addEventListener('click', () => {
    content.textContent = '';
    menu();
});

document.querySelector('button:nth-child(3)').addEventListener('click', () => {
    content.textContent = '';
    about();
});

