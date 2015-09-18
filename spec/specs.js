describe("Pizza", function() {
  it('creates a customized pizza', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.size).to.equal("Large");
    expect(myPizza.toppings).to.equal("Pepperoni");
    expect(myPizza.quanity).to.equal(1);
  });

  it('calculates the order total', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.totalCost).to.equal(17);
  });
});
