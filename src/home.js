import restaurantImage from "./images/restaurant.jpg";


const home = () => {
    
    const content = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");

    content.appendChild(homeContainer);

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "Interior do nosso restaurante";


    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our restaurant";

    homeContainer.appendChild(image);
    homeContainer.appendChild(heading);
    content.appendChild(homeContainer);

};

export default home;