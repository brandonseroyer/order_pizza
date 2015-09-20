function Pizza(size, toppings, quanity) {
  this.size = size;
  this.toppings = toppings;
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

  if (this.toppings === "Pepperoni" || "Sausage" || "Bacon" || "Salami") {
    sizePrice += 2;
  } else  {
    sizePrice += 1;
  }

    var totalPrice = (sizePrice * (this.quanity));
    return totalPrice;
  }
