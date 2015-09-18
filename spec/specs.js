describe("Pizza", function() {
  it('creates a customized pizza', function() {
    var myPizza = new Pizza("Large", "Pepperoni", 1);
    expect(myPizza.size).to.equal("Large");
    expect(myPizza.toppings).to.eql("Pepperoni");
    expect(myPizza.quanity).to.equal(1);
  });
});
