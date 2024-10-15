import Diluc from "./diluc.png";
import Noelle from "./noelle.png";

const about = () => {
    const content = document.querySelector("#content");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";

    const title = document.createElement("h1");
    title.textContent = "About Us";
    content.append(title);

    const manager_picture = document.createElement("img");
    manager_picture.src = Diluc;
    manager_picture.alt = "Diluc";
    content.append(manager_picture);

    const manager = document.createElement("h2");
    manager.textContent = "Manager: Diluc";
    content.append(manager);

    const worker_picture = document.createElement("img");
    worker_picture.src = Noelle;
    worker_picture.alt = "Noelle";
    content.append(worker_picture);

    const worker = document.createElement("h2");
    worker.textContent = "Worker: Noelle";
    content.append(worker);
}

export default about;