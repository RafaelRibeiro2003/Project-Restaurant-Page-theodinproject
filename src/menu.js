import restaurantImage from "./images/restaurant.jpg";
import pizzaImage from "./images/pizza.jpg";
import hamburgerImage from "./images/hamburger.jpg";
import pastaImage from "./images/pasta.jpg";
import salmonImage from "./images/salmon.jpg";


const createDish = (name, description, img) => {
    const dish = document.createElement("div");

    const image = document.createElement("img");
    image.src = img;
    image.alt = name;

    const title = document.createElement("h1");
    title.textContent = name;

    const text = document.createElement("span");
    text.textContent = description;

    dish.appendChild(image);
    dish.appendChild(title);
    dish.appendChild(text);

    return dish;
};

const menu = () => {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu_page");

    menuContainer.style.backgroundImage = `url(${restaurantImage})`;


    const heading = document.createElement("h1");
    heading.textContent = "Menu";


    const description = document.createElement("p");
    description.textContent =
        "Discover our selection of delicious homemade dishes.";


    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishes");

    // Pratos
    const dish_1 = createDish(
        "Pizza",
        "Pizza with tomato, cheese and basil.",
        pizzaImage
    );

    const dish_2 = createDish(
        "Hamburger",
        "Homemade hamburger with cheese and fries.",
        hamburgerImage
    );

    const dish_3 = createDish(
        "Pasta",
        "Fresh pasta with tomato sauce and parmesan.",
        pastaImage
    );

    const dish_4 = createDish(
        "Salmon",
        "Grilled salmon with vegetables and lemon.",
        salmonImage
    );

    dishesContainer.appendChild(dish_1);
    dishesContainer.appendChild(dish_2);
    dishesContainer.appendChild(dish_3);
    dishesContainer.appendChild(dish_4);

    menuContainer.appendChild(heading);
    menuContainer.appendChild(description);
    menuContainer.appendChild(dishesContainer);

    content.appendChild(menuContainer);
};

export default menu;