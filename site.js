const products = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80",
    price: 10,
    qty: 0,
    total: 0,
  },
  {
    id: 2,
    name: "Mango",
    image: "https://kokankanya.com/wp-content/uploads/2023/04/Hapus_Mango.jpg",
    price: 15,
    qty: 0,
    total: 0,
  },
  {
    id: 3,
    name: "Pear",
    image:
      "https://media.istockphoto.com/id/164142758/photo/single-pear.jpg?s=612x612&w=0&k=20&c=bTXnXhqVLSsAqX6UVdNuhuXS_U3XvHwZ1NpIgl95S6c=",
    price: 6,
    qty: 0,
    total: 0,
  },
];

const tableBody = document.querySelector("#myTable tbody");

function renderProducts() {
  tableBody.innerHTML = "";
  products.forEach((i) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
   <tr>
          <td>${i.id}</td>
          <td >${i.name}</td>
          <td><img src="${i.image}"></td>
          <td>${i.price}</td>
          <td><button class="minus" data-id="${i.id}">-</button><label class="lblqty">${i.qty}</label><button class="plus" data-id="${i.id}">+</button></td>
          <td>${i.total}</td>
    </tr>
`;
    tableBody.appendChild(newRow);
  });
}

renderProducts();

tableBody.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  console.log(target.classList);
  if (target.classList.contains("plus") || target.classList.contains("minus")) {
    const productId = parseInt(target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);

    if (product) {
      if (target.classList.contains("plus")) {
        product.qty++;
        product.total = product.qty * product.price;
      } else if (target.classList.contains("minus") && product.qty > 0) {
        product.qty--;
        product.total = product.qty * product.price;
      }
      //console.log(product.qty*product.price);
      renderProducts();
    }
  }
});
