function Airport() { this._array = []; }
Airport.prototype.clearForLanding = function(plane) { this._array.push(plane); };
Airport.prototype.hanger = function() { return this._array; };
