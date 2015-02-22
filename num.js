var nj = function(x) {

  function dim(m) {
    var d = [];
    for (;;) {
      d.push(m.length);

      if (Array.isArray(m[0])) {
        m = m[0];
      } else {
        break;
      }
    }

    return d;
  }

  /**
  * nj.add
  * Addition
  */
  function add(x, y) {
    return x + y;
  }

  this.add = function(x, y) {
    this.value = add(x, y);
  }

  /**
  * nj.sub
  * Subtraction
  */
  function sub(x, y) {
    return x - y;
  }

  this.sub = function(x, y) {
    this.value = sub(x, y);
  }

  /**
  * nj.mul
  * Multiplication
  */
  function mul(x, y) {
    return x * y;
  }

  this.mul = function(x, y) {
    this.value = mul(x, y);
  }

  /**
  * nj.div
  * Division
  */
  function div(x, y) {
    return x / y;
  }

  this.div = function(x, y) {
    this.value = div(x, y);
  }

  /**
  * nj.sum
  * Summation
  */
  function sum() {
    var s = 0;

    for(var i = 0; i < arguments.length; i++) {
      s += arguments[i];
    }

    return s;
  }

  this.sum = function() {
    var s = 0;

    for(var i = 0; i < arguments.length; i++) {
      s += arguments[i];
    }

    this.matrix = s;
  }

  /**
  * nj.array
  * Return a new array of given shape and type, filled with zeros.
  */
  this.array = function(m) {
    this.insert = function() {
      var value = arguments[arguments.length - 1];

      // for (var i = 0; i < arguments.length - 1; i++) {
      //   alert(arguments[i]);
      // }

      this.matrix[arguments[0]][arguments[1]] = value;
    }

    this.matrix = m;
    this.shape = "(" + dim(this.matrix) + ")";
    this.type = "njarray";
  }

  /**
  * nj.zeros
  * Return a new array of given shape and type, filled with zeros.
  */
  function zeros(d) {
    var m = [];

    for (var i = 0; i < d[0]; ++i) {
      m.push(d.length == 1 ? 0 : zeros(d.slice(1)));
    }

    return m;
  }

  this.zeros = function(d) {
    this.matrix = zeros(d);
    this.shape = "(" + dim(this.matrix) + ")";
    this.type = "njarray";
  }

  /**
  * nj.ones
  * Return a new array of given shape and type, filled with ones.
  */
  function ones(d) {
    var m = [];

    for (var i = 0; i < d[0]; ++i) {
      m.push(d.length == 1 ? 1 : ones(d.slice(1)));
    }

    return m;
  }

  this.ones = function(d) {
    this.matrix = ones(d);
    this.shape = "(" + dim(this.matrix) + ")";
    this.type = "njarray";
  }

  /**
  * nj.eye
  * Return a 2-D array with ones on the diagonal and zeros elsewhere.
  */
  function set_eye(d) {
    return Array.apply(null, new Array(d)).map(function(x, i, a) { return a.map(function(y, k) { return i === k ? 1 : 0; }) });
  }

  this.eye = function(d) {
    this.matrix = set_eye(d);
    this.shape = "(" + dim(this.matrix) + ")";
    this.type = "njarray";
  }

  /**
  * nj.inner
  * Return dot product of two matrices
  */
  function inner(v1, v2) {
    if (dim(v1)[0] != dim(v2)[0]) {
      throw "Error: Arrays have different lengths";
    }

    var p = 0;
    for (var i = 0; i < dim(v1)[0]; i++) {
      p += v1[i] * v2[i];
    }

    return p;
  }

  this.inner = function(v1, v2) {
    this.matrix = inner(v1, v2)
  }

  /**
  * nj.dot
  * Return dot product of two matrices
  */
  function dot(m1, m2) {
    if(dim(m1)[0] == dim(m2)[0]) {
      return inner(m1, m2);
    } else if (dim(m1)[1] != dim(m2)[0]) {
      throw "Error: Incompatible size";
    }

    var p = zeros([dim(m1)[0], dim(m2)[1]]);

    for (var i = 0; i < dim(m1)[0]; i++) {
      p[i] = [];

      for (var j = 0; j < dim(m2)[1]; j++) {
        var sum = 0;

        for (var k = 0; k < dim(m1)[1]; k++) {
          sum += m1[i][k] * m2[k][j];
        }

        p[i][j] = sum;
      }
    }

    return p;
  }

  this.dot = function(m1, m2) {
    this.matrix = dot(m1, m2)
  }
}

var nj = new nj();
