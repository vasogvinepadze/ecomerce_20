const product = [
  {
    id: 0,
    image: "./assets/product1.jpg",
    title: "maika",
    categoria: "MEN",
    price: 120,
  },
  {
    id: 1,
    image: "./assets/product7.jpg",
    title: "chanta",
    categoria: "MEN",
    price: 170,
  },
  {
    id: 2,
    image: "./assets/product3.jpg",
    title: "kurtka",
    categoria: "MEN",
    price: 190,
  },
  {
    id: 3,
    image: "./assets/product8.jpg",
    title: "botasi",
    categoria: "MEN",
    price: 50,
  },
  {
    id: 4,
    image: "./assets/1.jpg",
    title: "chanta",
    categoria: "WOMEN",
    price: 100,
  },
  {
    id: 4,
    image: "./assets/2.jpg",
    title: "chanta",
    categoria: "WOMEN",
    price: 70,
  },
  {
    id: 4,
    image: "./assets/3.jpg",
    title: "chanta",
    categoria: "WOMEN",
    price: 50,
  },
  {
    id: 4,
    image: "./assets/4.jpg",
    title: "chanta",
    categoria: "WOMEN",
    price: 80,
  },
  {
    id: 4,
    image: "./assets/7.jpg",
    title: "kaba",
    categoria: "KIDS",
    price: 50,
  },
  {
    id: 4,
    image: "./assets/8.jpg",
    title: "chanta",
    categoria: "KIDS",
    price: 180,
  },
  {
    id: 4,
    image: "./assets/9.jpg",
    title: "kaba",
    categoria: "KIDS",
    price: 120,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;
const mainScreen = (item) => {
  let { image, title, price, categoria } = item;

  return (
    `<div class='box'>
<div class= 'img-box'>
<img class='images' src=${image}></img>
</div>
<div class = 'bottom'>
<p>${title}</p>
<p> Category: ${categoria}</p>
<h2>${"$" + price}</h2> ` +
    "<button onclick= 'addtocart(" +
    i++ +
    ")'>Add to cart</button>" +
    `</div>

</div>`
  );
};

const mainGallery = document.getElementById("root");
mainGallery.innerHTML = product.map((shoe) => mainScreen(shoe)).join("");

//----------------------------
// filter

const btn = document.querySelectorAll(".categoryButton");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "ALL") {
      newValue = [...product];
      root.innerHTML = newValue.map((all) => mainScreen(all)).join("");
      displaycart();
      return;

      // root.innerHTML = categories.map((all) => mainScreen(all)).join("");
    }
    let fill = categories.filter((shoe) => shoe.categoria === btn.textContent);

    newValue = [...fill];
    let filteredArray = fill.map((shoe) => mainScreen(shoe)).join("");
    root.innerHTML = filteredArray;
    displaycart();
  });
});

//-----------------------
//search

const search = document.getElementById("search");
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const searchproduct = product.filter(function (sea) {
    return sea.title.toLowerCase().includes(value);
  });
  root.innerHTML = searchproduct.map((sear) => mainScreen(sear)).join("");
});

//------------------------
// add to cart
const cartOne = document.getElementById("cartItem");
const totalOne = document.getElementById("total");
const countOne = document.getElementById("count");

let cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let i = 0;
  let total = 0;

  countOne.innerHTML = cart.length;

  if (cart.lenght == 0) {
    cartOne.innerHTML = "Your cart is empty";
    totalOne.innerHTML = "$ " + 0 + " .00";
  } else {
    cartOne.innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        total = total + price;
        totalOne.innerHTML = "$" + total + ".00";
        return (
          `<div class ='cart-item'>
            <div class='row-img'>
            <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;' >${title}</p>
            <h2 style='fonst-size: 15px;' >${"$" + price}.00</h2>` +
          "<i class='uil uil-trash' onclick=delElement(" +
          i++ +
          ")></i></div>"
        );
      })
      .join("");
  }
}

// ------- open cart main
let cartIcon = document.getElementById("cartIcon");
let closeCart = document.getElementById("closeCart");
let carts = document.getElementById("cartMain");

// open cart
cartIcon.onclick = () => {
  carts.classList.add("active");
};

// close cart
closeCart.onclick = () => {
  carts.classList.remove("active");
};
