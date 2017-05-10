describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("can store a landed plane at a hanger", function() {
    plane.land(airport);
    expect(airport.hanger()).toContain(plane);
  });
  it("empties a hanger after plane take off", function() {
    plane.land(airport);
    plane.take_off(airport);
    expect(airport.hanger()).not.toContain(plane);
  });

});
