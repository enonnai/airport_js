describe("Plane", function() {

  var plane = new Plane();

  describe("#land", function() {
      it("expects to receive land", function() {
        expect(plane.land()).not.toBeUndefined();
      });
  });
})
