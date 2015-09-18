function Pizza(size, topping, quanity) {
  this.size = size;
  this.topping = topping;
  this.quanity = quanity;
}

Pizza.prototype.totalValue = function() {
var sizeValue = 0;
  if (this.size === "X-Large") {
    sizeValue = 20;
  } else if (this.size === "Large") {
    sizeValue = 16;
  } else if (this.size === "Medium") {
    sizeValue = 12;
  } else {
    sizeValue = 8;
  }

  var toppings = this.topping.split(" ");
  var toppingValue = toppings.length;

  var totalValue = toppingValue + sizeValue * (this.quanity);
  return totalValue;
};
