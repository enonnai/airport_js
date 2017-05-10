describe("Plane", function() {

  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakingOff']);
      });

  describe("#land", function() {
      it("expects to receive land", function() {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
      });
  });

  describe("#take_off", function() {
    it("expects to receive takeoff", function() {
      plane.land(airport);
      plane.take_off(airport);
      expect(airport.clearForTakingOff).toHaveBeenCalledWith(plane);
    });
  });
});
