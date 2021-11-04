const shoes = {
    "green": {
        "id": "812d8359-c545-4b66-8355-16d1a9e2cb4a",
        "name": "adidas Hoops 2.0 Mid",
        "images": ["./assets/img/hoops/1.png", "./assets/img/hoops/2.png", "./assets/img/hoops/3.png"],
        "price": 80.00,
        "stock": "In stock",
        "sizes": [41,42,45]
    },
    "black": {
        "id": "800ec515-ad2d-41dd-8f9a-80906c870adb",
        "name": "adidas Terrex AX3",
        "images": ["./assets/img/terrex/1.png", "./assets/img/terrex/2.png", "./assets/img/terrex/3.png"],
        "price": 110.00,
        "stock": "Out of stock",
        "sizes": []
    },
    "beige": {
        "id": "80d621b7-4151-4042-b11d-1badee1962af",
        "name": "Nike Manoa Leather",
        "images": ["./assets/img/manoa/1.png", "./assets/img/manoa/2.png", "./assets/img/manoa/3.png"],
        "price": 145.00,
        "stock": "Nearly gone",
        "sizes": [40,41]
    }
}

let productName = document.getElementById('product-name');
let footerName = document.getElementById('footer-product-name');
let productID = document.getElementById('product-id')
let sizingSelect = document.getElementById('sizing-select');
let availability = document.getElementById('availability');
let sizeSection = document.querySelector('.size-section');
let priceElement = document.getElementById('price');
let addToCartButton = document.getElementById('add-to-cart');
let carouselItems = document.querySelectorAll('.carousel-item');

function selectColor(color){
    let shoe = shoes[color];
    replaceContent(shoe);
}

function replaceContent(shoe) {
    productName.innerHTML = shoe.name;
    footerName.innerHTML = shoe.name;
    productID.innerHTML = `Item No: ${shoe.id}`;

    if(shoe.sizes.length == 0){
        sizeSection.classList.add('d-none');
        addToCartButton.classList.add('btn-danger');
        addToCartButton.innerHTML = 'Please select another color';
    } else {
        sizeSection.classList.remove('d-none');
        addToCartButton.classList.remove('btn-danger');
        addToCartButton.innerHTML = 'Add to Cart';
        sizingSelect.innerHTML = '<option selected>Select Size</option>';

        for (const size of shoe.sizes) {
            sizingSelect.innerHTML += `<option value=${size}>${size}</option>`;
        }
    }

    availability.innerHTML = `Availability: ${shoe.stock}`;
    price.innerHTML = `$${shoe.price.toFixed(2)}`;

    shoe.images.forEach((element, index) => {
        console.log(element);
        console.log(index);
        carouselItems[index].innerHTML = `<img src="${element}" class="d-block w-100" alt="...">`;
    });
}

(function() {
    replaceContent(shoes.green);
})()