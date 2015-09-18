function Pizza(size, topping, quanity) {
  this.size = size;
  this.topping = topping;
  this.quanity = quanity;
}

Pizza.prototype.totalPrice = function() {
  var sizePrice = 0;
  if (this.size === "X-Large") {
    sizePrice = 20;
  } else if (this.size === "Large") {
    sizePrice = 16;
  } else if (this.size === "Medium") {
    sizePrice = 12;
  } else {
    sizePrice = 8;
  }

  var toppings = this.topping.split(" ");
  var toppingPrice = toppings.length;

  var totalPrice = toppingPrice + (sizePrice * (this.quanity));
  return totalPrice;
};
