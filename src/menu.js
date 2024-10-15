import GoldenFriedChicken from "./Item_Golden_Fried_Chicken.webp";
import GoldenChickenBurger from "./Item_Golden_Chicken_Burger.webp";

const menu = () => {
    const content = document.querySelector("#content");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.append(title);

    const picture1 = document.createElement("img");
    picture1.src = GoldenFriedChicken;
    picture1.alt = "Golden Fried Chicken";
    content.append(picture1);

    const item1 = document.createElement("h2");
    item1.textContent = "Golden Fried Chicken";
    content.append(item1);

    const picture2 = document.createElement("img");
    picture2.src = GoldenChickenBurger;
    picture2.alt = "Golden Chicken Burger";
    content.append(picture2);

    const item2 = document.createElement("h2");
    item2.textContent = "Golden Chicken Burger";
    content.append(item2);
}

export default menu;