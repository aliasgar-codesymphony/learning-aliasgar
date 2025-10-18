const products = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80",
    price: 10,
    qty: 1,
    total: 0,
  },
  {
    id: 2,
    name: "Mango",
    image: "https://kokankanya.com/wp-content/uploads/2023/04/Hapus_Mango.jpg",
    price: 15,
    qty: 1,
    total: 0,
  },
  {
    id: 3,
    name: "Pear",
    image:
      "https://media.istockphoto.com/id/164142758/photo/single-pear.jpg?s=612x612&w=0&k=20&c=bTXnXhqVLSsAqX6UVdNuhuXS_U3XvHwZ1NpIgl95S6c=",
    price: 6,
    qty: 1,
    total: 0,
  },
];

let increment = (index) => {
  products[index].qty++;
  console.log(products[index].qty);
  renderProducts();
};
let decrement = (index) => {
  if (products[index].qty > 1) {
    products[index].qty--;
    renderProducts();
  }
};
const tableBody = document.querySelector("#myTable tbody");

function renderProducts() {
  tableBody.innerHTML = "";
  products.forEach((i, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
  <tr>
          <td>${i.id}</td>
          <td >${i.name}</td>
          <td><img src="${i.image}"></td>
          <td>${i.price}</td>
          <td><button class="minus" onclick="decrement(${index})">-</button><label class="lblqty">${
      i.qty
    }</label><button class="plus" data-id="${
      i.id
    }" id="plus" onclick="increment(${index})">+</button></td>
          <td>${i.price * i.qty}</td>
    </tr>
`;
    console.log(newRow);
    tableBody.appendChild(newRow);
  });
}

renderProducts();
