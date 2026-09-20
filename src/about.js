import restaurantImage from "./images/restaurant.jpg";

const about = () => {
    const content = document.querySelector("#content");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about_page");

    aboutContainer.style.backgroundImage = `url(${restaurantImage})`;

    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.classList.add("aboutTextContainer");


    const heading = document.createElement("h1");
    heading.textContent = "About Us";


    const description1 = document.createElement("p");
    description1.textContent = "Since 2020, our restaurant has been a place where simple ingredients, homemade recipes, and a love for good food come together.";

    const description2 = document.createElement("p");
    description2.textContent = "What started as a small idea between friends quickly became a place where people could gather, share a meal, and enjoy something made with care. Our menu brings together familiar favorites and our own interpretations of dishes we love, always with fresh ingredients and plenty of passion.";

    const description3 = document.createElement("p");
    description3.textContent = "We believe great food doesn't have to be complicated. It just needs to be honest, comforting, and made for sharing."

    const description4 = document.createElement("p");
    description4.textContent = "Come hungry, stay a while, and become part of our story."

    aboutContainer.appendChild(heading);
    aboutTextContainer.appendChild(description1);
    aboutTextContainer.appendChild(description2);
    aboutTextContainer.appendChild(description3);
    aboutTextContainer.appendChild(description4);


    aboutContainer.appendChild(aboutTextContainer);
    content.appendChild(aboutContainer);

};

export default about;