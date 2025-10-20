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
let retrive = localStorage.getItem("myArray");
let parsed = JSON.parse(retrive);
if (parsed === null) {
  localStorage.setItem("myArray", JSON.stringify(products));
}

const tableBody = document.querySelector("#myTable tbody");

let increment = (index) => {
  //localStorage.setItem("myArray", JSON.stringify(products));
  let row = tableBody.rows[index];
  let lb = row.querySelector("label");
  let tds = row.getElementsByTagName("td");

  retrive = localStorage.getItem("myArray");
  parsed = JSON.parse(retrive);
  //  console.log(parsed[index].id);
  //products[index].qty;
  lb.innerHTML = ++parsed[index].qty;

  parsed[index].total = parsed[index].price * parsed[index].qty;
  tds[5].innerHTML = parsed[index].total;

  console.log(lb.innerHTML);
  console.log(tds[5].innerHTML);
  localStorage.setItem("myArray", JSON.stringify(parsed));
};

let decrement = (index) => {
  retrive = localStorage.getItem("myArray");
  parsed = JSON.parse(retrive);
  if (parsed[index].qty > 0) {
    let row = tableBody.rows[index];
    let lb = row.querySelector("label");
    let tds = row.getElementsByTagName("td");

    lb.innerHTML = --parsed[index].qty;

    parsed[index].total = parsed[index].price * parsed[index].qty;
    tds[5].innerHTML = parsed[index].total;

    console.log(lb.innerHTML);
    console.log(tds[5].innerHTML);
  }
  localStorage.setItem("myArray", JSON.stringify(parsed));
};

function renderProducts() {
  tableBody.innerHTML = "";
  retrive = localStorage.getItem("myArray");
  parsed = JSON.parse(retrive);

  parsed.forEach((i, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
  <tr>
          <td>${i.id}</td>
          <td >${i.name}</td>
          <td><img src="${i.image}"></td>
          <td>${i.price}</td>
          <td ><button class="minus" onclick="decrement(${index})">-</button><label >${i.qty}</label><button class="plus" data-id="${i.id}" id="plus" onclick="increment(${index})">+</button></td>
          <td>${i.total}</td>
    </tr>
`;
    console.log(newRow);
    tableBody.appendChild(newRow);
  });
}

renderProducts();
