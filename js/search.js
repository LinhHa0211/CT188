let products = {
    data: [
        {
            productName: "Mer i1",
            category: "Mercedes",
            price: "12",
            image: "../images/bmw.png",
        },
        {
            productName: "Mer i2",
            category: "Mercedes",
            price: "214",
            image: "../images/bmw.png",
        },
        {
            productName: "BMW i1",
            category: "BMW",
            price: "124",
            image: "../images/bmw.png",
        },
        {
            productName: "BMW i2",
            category: "BMW",
            price: "214",
            image: "../images/bmw.png",
        },
        {
            productName: "Toyota i1",
            category: "Toyota",
            price: "124",
            image: "../images/bmw.png",
        },
        {
            productName: "Toyota i2",
            category: "Toyota",
            price: "214",
            image: "../images/bmw.png",
        },
    ],
}

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //Img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //Img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Container
    let container = document.createElement("div");
    container.classList.add("container");
    //Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //Prize
    let price = document.createElement("h6");
    price.innerText = i.price + "VND";
    container.appendChild(price);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search-input-button").addEventListener("click", () => {
    filterProduct('all');
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    })
});

window.onload = () => {
    filterProduct('all');
};