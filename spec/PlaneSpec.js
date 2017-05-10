describe("Plane", function() {

  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['planes']);
      });

  describe("#land", function() {
      it("expects to receive land", function() {
        plane.land(airport);
        expect(plane.land).toHaveBeenCalledWith(airport);
        expect(airport.planes).toHaveBeenCalled();
        //expect(plane.land(airport)).not.toBeUndefined();
      });
  });
});
