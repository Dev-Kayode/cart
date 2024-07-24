const likeIcons = document.querySelectorAll(".fa-heart");

let liked = false;

likeIcons.forEach(function (likeIcon) {
  likeIcon.addEventListener("click", function () {
    liked = !liked;

    if (liked) {
      likeIcon.setAttribute("class", "fa-solid fa-heart");
    } else {
      likeIcon.setAttribute("class", "fa-regular fa-heart");
    }
  });
});

//Increment Button
const incrementButtons = document.querySelectorAll(".fa-plus-circle");
const subTotalElement = document.querySelector(".quantity");
const totals = document.querySelector(".total");
let total = 0;

incrementButtons.forEach(function (incrementButton) {
  incrementButton.addEventListener("click", function () {
    //Increment Item Quantity
    const qtyParagraph = incrementButton.nextElementSibling;

    let quantity = parseInt(qtyParagraph.textContent);
    quantity++;
    qtyParagraph.textContent = quantity;

    //Increment Subtotal
    const priceDiv = incrementButton.parentElement.previousElementSibling;
    const itemPriceElement = priceDiv.querySelector(".unit-price");
    const itemPriceNum = parseInt(itemPriceElement);

    total = total + itemPriceNum;
  });
});

//Decrement Button
const decrementButtons = document.querySelectorAll(".fa-minus-circle");
const subTotalQty = document.querySelector(".quantity");

decrementButtons.forEach(function (decrementButton) {
  decrementButton.addEventListener("click", function () {
    //Decrement Item Quantity
    const qtyParagraph = decrementButton.previousElementSibling;

    let quantity = parseInt(qtyParagraph.textContent);
    quantity--;

    if (quantity >= 0) {
      qtyParagraph.textContent = quantity;
    }

    const priceDiv = decrementButton.parentElement.previousElementSibling;

    const itemPriceElement = priceDiv.querySelector(".item_price");

    const itemPriceNum = parseInt(itemPriceElement);
    if (subTotalPrice === 0) {
      return;
    }
    subTotalPrice = subTotalPrice - itemPriceNum;
    qtyParagraph.textContent = quantity;
  });
});

//Delete Icon
const deleteIcons = document.querySelectorAll(".fa-trash-alt");
const cardBody = document.querySelectorAll(".card-body");
console.log(deleteIcons);

deleteIcons.forEach(function (deleteIcon) {
  deleteIcon.addEventListener("click", function () {
    const cardBody = deleteIcon.closest(".card");
    cardBody.remove();
  });
});
