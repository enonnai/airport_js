describe('Aiport', function() {

  airport = new Airport();

  it('has an array of planes', function() {
    expect(airport.planes()).toEqual([]);
  });

});
