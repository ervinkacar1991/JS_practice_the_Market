function addToCart(element) {
  let mainEl = element.closest(".single-item");

  let price = mainEl.querySelector(".price").innerText;

  let name = mainEl.querySelector("h3").innerText;

  let quantity = mainEl.querySelector("input").value;
  console.log(quantity);

  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);

    console.log(total);

    cartItems.innerHTML += `<div class="cart-single-item">
    <h3>${name}</h3>
    <p>${price} * ${quantity} = ${total}<p>

    </div>`;

    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Odaberi kolicinu.");
  }

  // let input = element.previousElementSibling;
  // console.log(input.value);
}
