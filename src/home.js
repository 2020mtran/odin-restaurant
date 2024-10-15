import kfcImage from "./kfc.png";

const home = () => {
    const content = document.querySelector("#content");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";

    const title = document.createElement("h1");
    title.textContent = "Welcome to my restaurant!";
    content.append(title);

    const mainImg = document.createElement("img");
    mainImg.src = kfcImage;
    mainImg.alt = "Picture of a guy stealing a cutout of Noelle";
    content.append(mainImg);

    const welcome = document.createElement("h2");
    welcome.textContent = "My restaurant is the best! See what this guy is doing!";
    content.append(welcome);
}

export default home;