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
    var m1_row = dim(m1)[0];
    var m1_col = dim(m1)[1];
    var m2_row = dim(m2)[0];
    var m2_col = dim(m2)[1];

    if(m1_row == m2_row) {
      return inner(m1, m2);
    } else if (m1_col != m2_row) {
      throw "Error: Incompatible size";
    }

    var p = zeros([m1_row, m2_col]);

    for (var i = 0; i < m1_row; i++) {
      p[i] = [];

      for (var j = 0; j < m2_col; j++) {
        var sum = 0;

        for (var k = 0; k < m1_col; k++) {
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
