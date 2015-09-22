describe("Pizza", function() {
  it('creates a customized pizza order', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.size).to.equal("Large");
    expect(myPizza.toppings).to.equal("Pepperoni");
    expect(myPizza.quantity).to.equal(1);
  });

  it('calculates the total price of the customized order', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.totalPrice()).to.equal(18);
  });
});
