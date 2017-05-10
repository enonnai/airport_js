function Plane() {

  this.land = function(airport) {
    airport.planes().push(this);
  };

}
