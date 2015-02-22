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
  * nj.abs
  * Return the absolute value of x
  */
  function abs(x) {
    return Math.abs(x);
  }

  this.abs = function(x) {
    this.value = abs(x);
  }

  /**
  * nj.ceil
  * Returns x, rounded upwards to the nearest integer
  */
  function ceil(x) {
    return Math.ceil(x);
  }

  this.ceil = function(x) {
    this.value = ceil(x);
  }

  /**
  * nj.floor
  * Returns x, rounded downwards to the nearest integer
  */
  function floor(x) {
    return Math.floor(x);
  }

  this.floor = function(x) {
    this.value = floor(x);
  }

  /**
  * nj.exp
  * Returns the value of E^x
  */
  function exp(x) {
    return Math.exp(x);
  }

  this.exp = function(x) {
    this.value = exp(x);
  }

  /**
  * nj.log
  * Returns the natural logarithm (base E) of x
  */
  function log(x) {
    return Math.log(x);
  }

  this.log = function(x) {
    this.value = log(x);
  }

  /**
  * nj.pow
  * Returns the value of x to the power of y
  */
  function pow(x, y) {
    return Math.pow(x, y);
  }

  this.pow = function(x, y) {
    this.value = pow(x, y);
  }

  /**
  * nj.round
  * Rounds x to the nearest integer
  */
  function round(x) {
    return Math.round(x);
  }

  this.round = function(x) {
    this.value = round(x);
  }

  /**
  * nj.sqrt
  * Rounds x to the nearest integer
  */
  function sqrt(x) {
    return Math.sqrt(x);
  }

  this.sqrt = function(x) {
    this.value = sqrt(x);
  }

  /**
  * nj.random
  * Returns a random number between x and y
  */
  function random(x, y) {
    return Math.random() * (y - x) + x;
  }

  this.random = function(x, y) {
    this.value = random(x, y);
  }

  /**
  * nj.max
  * Returns the number with the highest value
  */
  function max() {
    return Math.max(arguments);
  }

  this.max = function() {
    var max = arguments[0];

    for(var i = 1; i < arguments.length; i++) {
      if(max <= arguments[i]) {
        max = arguments[i];
      }
    }

    this.value = max;
  }

  /**
  * nj.min
  * Returns the number with the lowest value
  */
  function min() {
    return Math.min(arguments);
  }

  this.min = function() {
    var min = arguments[0];

    for(var i = 1; i < arguments.length; i++) {
      if(min >= arguments[i]) {
        min = arguments[i];
      }
    }

    this.value = min;
  }


  /**
  * nj.PI
  * PI
  */
  function PI() {
    return Math.PI;
  }

  this.PI = function() {
    this.value = Math.PI;
  }

  /**
  * nj.cos
  * Cosine
  */
  function cos(deg) {
    return Math.cos((deg / 180) * PI());
  }

  this.cos = function(deg) {
    this.value = cos(deg);
  }

  /**
  * nj.sin
  * Sine
  */
  function sin(deg) {
    return Math.sin((deg / 180) * PI());
  }

  this.sin = function(deg) {
    this.value = sin(deg);
  }

  /**
  * nj.tan
  * Tangent
  */
  function tan(deg) {
    return Math.tan((deg / 180) * PI());
  }

  this.tan = function(deg) {
    this.value = tan(deg);
  }

  /**
  * nj.acos
  * Arcosine
  */
  function acos(deg) {
    return Math.acos((deg / 180) * PI());
  }

  this.acos = function(deg) {
    this.value = acos(deg);
  }

  /**
  * nj.asin
  * Arcine
  */
  function asin(deg) {
    return Math.asin((deg / 180) * PI());
  }

  this.asin = function(deg) {
    this.value = asin(deg);
  }

  /**
  * nj.atan
  * Arctangent
  */
  function atan(deg) {
    return Math.atan((deg / 180) * PI());
  }

  this.atan = function(deg) {
    this.value = atan(deg);
  }

  /**
  * nj.cosh
  * Hyperbolic Cosine
  */
  function cosh(deg) {
    return Math.cosh((deg / 180) * PI());
  }

  this.cosh = function(deg) {
    this.value = cosh(deg);
  }

  /**
  * nj.sinh
  * Hyperbolic Sine
  */
  function sinh(deg) {
    return Math.sinh((deg / 180) * PI());
  }

  this.sinh = function(deg) {
    this.value = sinh(deg);
  }

  /**
  * nj.tanh
  * Hyperbolic Tangent
  */
  function tanh(deg) {
    return Math.ttanhan((deg / 180) * PI());
  }

  this.tanh = function(deg) {
    this.value = tanh(deg);
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
