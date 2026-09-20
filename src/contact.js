import restaurantImage from "./images/restaurant.jpg";

const contact = () => {
    const content = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact_page");

    contactContainer.style.backgroundImage = `url(${restaurantImage})`;

    const contactTextContainer = document.createElement("div");
    contactTextContainer.classList.add("contactTextContainer");


    const heading = document.createElement("h1");
    heading.textContent = "Get in Touch";


    const description = document.createElement("p");
    description.textContent =
        "Our team of elite chefs would love to hear from you. Give us a call or send us an email.";

    const numberPhone = document.createElement("p");
    numberPhone.textContent = "Phone: 912 345 678"

    const email = document.createElement("p");
    email.textContent = "Email: rafa2003ribeiro@gmail.com"

    contactContainer.appendChild(heading);
    contactTextContainer.appendChild(description);
    contactTextContainer.appendChild(numberPhone);
    contactTextContainer.appendChild(email);

    contactContainer.appendChild(contactTextContainer);
    content.appendChild(contactContainer);

};

export default contact;