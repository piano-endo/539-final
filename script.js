function home() {
  console.log("test");
  let currentRoot = window.location.protocol + "//" + window.location.host;
  let homePage = currentRoot + "/539-final/index.html";
  window.open(homePage, "_self");
}

function greeting() {
  let name = sessionStorage.getItem("customerName");
  console.log(name);
  document.getElementsByClassName("greeting")[0].innerHTML = "Hi " + name;
}

function thanks() {
  let name = sessionStorage.getItem("customerName");
  let order = sessionStorage.getItem("Order");
  console.log(order);
  document.getElementsByClassName("thanks")[0].innerHTML = "Thank you " + name;
  document.getElementsByClassName("order")[0].innerHTML =
    "Your order is confirmed: " + order;
}

function saveOrder() {
  let orderedItem =
    document.getElementsByClassName("ordered-item")[0].innerHTML;
  sessionStorage.setItem("Order", orderedItem);
}

// document.addEventListener("onload", greeting());
// document
//   .getElementsByClassName("logo")[0]
//   .addEventListener("click", function () {
//     let currentRoot = window.location.protocol + "//" + window.location.host;
//     let homePage = currentRoot + "/index.html";
//     console.log(homePage);
//     window.open(homePage, "_self");
//   });
