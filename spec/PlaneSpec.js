describe("Plane", function() {

  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
      });

  describe("#land", function() {
      it("expects to receive land", function() {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
      });
  });
});
