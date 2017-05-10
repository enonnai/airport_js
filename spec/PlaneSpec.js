describe("Plane", function() {

  var airport;
  var plane;

  beforeEach(function() {
    var plane = new Plane();
    airport = jasmine.createSpy('airport');
      });

  //*describe("#land", function() {
      it("expects to receive land", function() {
        expect(plane.land(airport)).not.toBeUndefined();
      });
  });
//*});
