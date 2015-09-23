describe("Pizza", function() {
  it('creates a customized pizza order', function() {
    var testPizza = new Pizza("Large", [], 1);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.quantity).to.equal(1);
  });

  it('calculates the total price of the customized order', function() {
    var testPizza = new Pizza("Large", [], 1);
    testPizza.addTopping("Pepperoni");
    expect(testPizza.totalPrice()).to.equal(18);
  });
});
