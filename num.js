var nj = function(x) {

  function get_dim(a) {
    var dim = [];
    for (;;) {
      dim.push(a.length);

      if (Array.isArray(a[0])) {
        a = a[0];
      } else {
        break;
      }
    }
    return dim;
  }

  /**
  * nj.array
  * Return a new array of given shape and type, filled with zeros.
  */
  this.array = function(x) {
    this.insert = function() {
      var value = arguments[arguments.length - 1];

      // for (var i = 0; i < arguments.length - 1; i++) {
      //   alert(arguments[i]);
      // }

      this.matrix[arguments[0]][arguments[1]] = value;
    }

    this.matrix = x;
    this.shape = "(" + get_dim(this.matrix) + ")";
    this.type = "njarray";
  };

  /**
  * nj.zeros
  * Return a new array of given shape and type, filled with zeros.
  */
  this.zeros = function() {
    function set_zeros(dim) {
      var temp = [];

      for (var i = 0; i < dim[0]; ++i) {
        temp.push(dim.length == 1 ? 0 : set_zeros(dim.slice(1)));
      }

      return temp;
    }

    this.matrix = set_zeros(arguments[0]);
    this.shape = "(" + get_dim(this.matrix) + ")";
    this.type = "njarray";
  };

  /**
  * nj.ones
  * Return a new array of given shape and type, filled with ones.
  */
  this.ones = function() {
    function set_ones(dim) {
      var temp = [];

      for (var i = 0; i < dim[0]; ++i) {
        temp.push(dim.length == 1 ? 1 : set_ones(dim.slice(1)));
      }

      return temp;
    }

    this.matrix = set_ones(arguments[0]);
    this.shape = "(" + get_dim(this.matrix) + ")";
    this.type = "njarray";
  };
}
