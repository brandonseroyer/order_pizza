function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.totalPrice = function() {
  var sizePrice = 0;

  if (this.size === "X-Large") {
      sizePrice += 20;
  } else if (this.size === "Large") {
      sizePrice += 16;
  } else if (this.size === "Medium") {
      sizePrice += 12;
  } else if (this.size === "Small") {
      sizePrice += 8;
  }

  if (this.toppings === "Pepperoni" || "Sausage" || "Bacon" || "Salami" || "Ham") {
      sizePrice += 2;
  }  else if (this.toppings === "Green Pepper" || "Mushroom" || "Onion" || "Black Olive") {
      sizePrice += 1;
  }


    var totalPrice = (sizePrice * (this.quantity));
    return totalPrice;
  }

  $(document).ready(function() {
    var clearForm = function() {
      $('input:checkbox').removeAttr('checked');
      $('input:radio').removeAttr('checked');
    };

    var mySize = ["Small", "Medium", "Large", "X-Large"];
    var myQuantity = [1, 2, 3, 4, 5, 10];

    mySize.forEach(function(size) {
      $("select#size-list").append("<option value='" + size + "'><span class='chosen-size'>" + size + "</span></option>");
    });

    myQuantity.forEach(function(quantity) {
      $("select#quantity-list").append("<option value='" + quantity + "'><span class='chosen-quantity'>" + quantity + "</span></option>");
    });
    var pizzaToppings = [];
   $(this).find("input[name=toppings]:checked").each(function() {
     pizzaToppings.push($(this).val());
   });
    $("form#user-info").submit(function(event) {

    var pizzaSize = $("#size-list option:selected").text();
    var pizzaQuantity = parseInt($("#quantity-list option:selected").val());
    var myPizza = new Pizza(pizzaSize, parseInt(pizzaToppings.length), pizzaQuantity);
    var myPrice = myPizza.totalPrice();


    $(".sizeChoice").text(pizzaSize);
    $(".toppingsChoice").text(pizzaToppings);
    $(".quantityChoice").text(pizzaQuantity);
    $(".total-price").text(myPrice);


    $("select#size-list").val("");
    $("select#pizza-toppings").val("");
    $("select#quantity-list").val("");

    $("#result").show();
      event.preventDefault();
  });
});
