describe("Pizza", function() {
  it('creates a customized pizza', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.size).to.equal("Large");
    expect(myPizza.topping).to.equal("Pepperoni");
    expect(myPizza.quanity).to.equal(1);
  });

  it('calculates the order total', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.totalValue()).to.equal(17);
  });
});
