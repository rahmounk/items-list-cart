function Products(pic, name, price) {
   (this.pic = pic), (this.name = name), (this.price = price);
}

const product1 = new Products("./assets/image/figure1.jpg", "Zoro", 80);
const product2 = new Products("../assets/image/figure2.jpg", "Mirai", 70);
const product3 = new Products(
   "../assets/image/figure3.jpg",
   "Black Rock Shooter",
   120
);
const product4 = new Products(
   "../assets/image/figure4.jpg",
   "Eren vs Reiner",
   600
);
const product5 = new Products("../assets/image/figure5.png", "Sasuke", 90);
const product6 = new Products("../assets/image/figure6.jpg", "Miku", 50);
const product7 = new Products("../assets/image/figure7.jpg", "Picolo", 65);

let products = [];
products.push(
   product1,
   product2,
   product3,
   product4,
   product5,
   product6,
   product7
);

function populateTableList() {
   let listOfProducts = "";

   products.forEach(
      (prod) =>
         (listOfProducts += `
        <tr class="text-center">
          <td><img src=${prod.pic} class="img-fluid img-thumbnail w-100"></td>
          <td class="w-25 align-middle">${prod.name}</td>
          <td class="w-25 align-middle">${prod.price}€</td>
          <td class="w-25 align-middle"><button class="btn btn-info">View</button></td>
        </tr>
        `)
   );

   document.getElementById("productList").innerHTML = listOfProducts;
}
