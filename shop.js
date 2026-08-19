let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
  let list = document.getElementById("cart-list");
  if (!list) return;
  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    list.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    total += item.price;
  });
  document.getElementById("total").textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function checkout() {
  cart = [];
  localStorage.removeItem("cart");
  updateCartUI();
}

function createNewProduct() {
  let name = document.getElementById("new-name").value;
  let price = Number(document.getElementById("new-price").value);

  products.push({ name, price });
  localStorage.setItem("products", JSON.stringify(products));
  showProducts();
}

function showProducts() {
  let list = document.getElementById("product-list");
  if (!list) return;


  list.innerHTML = `
    <li>Apple - $10 <button onclick="addToCart('Apple', 10)">Add</button></li>
    <li>Bread - $5 <button onclick="addToCart('Bread', 5)">Add</button></li>
  `;


  products.forEach(prod => {
    list.innerHTML += `<li>${prod.name} - $${prod.price} <button onclick="addToCart('${prod.name}', ${prod.price})">Add</button></li>`;
  });
}
