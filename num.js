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

  /****************/
  /**    Math    **/
  /****************/

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

    this.value = s;
  }

  /**
  * nj.fibo
  * Returns the n-th fibonacii number
  */
  function fibo(x) {
    if(x == 0 || x == 1) {
      return 1;
    } else {
      return fibo(x - 1) + fibo(n - 2);
    }
  }

  this.fibo = function(x) {
    this.value = fibo(x);
  }

  /*****************/
  /** Logic Gates **/
  /*****************/

  /**
  * nj.not
  * NOT Gate
  */
  function not(x) {
    return !Boolean(x);
  }

  this.not = function(x) {
    this.value = not(x);
  }

  /**
  * nj.and
  * AND Gate
  */
  function and(x, y) {
    if(Boolean(x) == 0 || Boolean(y) == 0) {
      return false;
    } else {
      return true;
    }
  }

  this.and = function(x, y) {
    this.value = and(x, y);
  }

  /**
  * nj.or
  * OR Gate
  */
  function or(x, y) {
    if(Boolean(x) == 1 || Boolean(y) == 1) {
      return true;
    } else {
      return false;
    }
  }

  this.or = function(x, y) {
    this.value = or(x, y);
  }

  /**
  * nj.nand
  * NAND Gate
  */
  function nand(x, y) {
    return not(and(x, y));
  }

  this.nand = function(x, y) {
    this.value = nand(x, y);
  }

  /**
  * nj.nor
  * NOR Gate
  */
  function nor(x, y) {
    return not(or(x, y));
  }

  this.nor = function(x, y) {
    this.value = nor(x, y);
  }

  /**
  * nj.xor
  * XOR Gate
  */
  function xor(x, y) {
    if(Boolean(x) != Boolean(y)) {
      return true;
    } else {
      return false;
    }
  }

  this.xor = function(x, y) {
    this.value = xor(x, y);
  }

  /**
  * nj.xnor
  * XNOR Gate
  */
  function xnor(x, y) {
    return not(xor(x, y));
  }

  this.xnor = function(x, y) {
    this.value = xnor(x, y);
  }

  /**
  * nj.aoi_1
  * 2-1 AND-OR-Invert Gate
  */
  function aoi_1(x, y, z) {
    var ag = and(x, y);
    var og = or(ag, z);

    return not(og);
  }

  this.aoi_1 = function(x, y, z) {
    this.value = aoi_2(x, y, z);
  }

  /**
  * nj.aoi_2
  * 2-2 AND-OR-Invert Gate
  */
  function aoi_2(w, x, y, z) {
    var ag1 = and(w, x);
    var ag2 = and(y, z);
    var og = or(ag1, ag2);

    return not(og);
  }

  this.aoi_2 = function(w, x, y, z) {
    this.value = aoi_2(w, x, y, z);
  }

  /******************/
  /**    Adders    **/
  /******************/

  /**
  * nj.half_adder
  * Half Adder
  */
  function half_adder(x, y) {
    var output = []

    output[0] = and(x, y);
    output[1] = xor(x, y);

    return output;
  }

  this.half_adder = function(x, y) {
    this.value = half_adder(x, y);
  }

  /**
  * nj.full_adder
  * Full Adder
  */
  function full_adder(x, y, c) {
    var output = []

    var xg1 = xor(x, y);
    var ag1 = and(x, y);
    var xg2 = xor(xg1, c);
    var ag2 = and(xg1, c);
    var og = or(ag1, ag2);

    output[0] = xg2;
    output[1] = og;

    return output;
  }

  this.full_adder = function(x, y) {
    this.value = full_adder(x, y);
  }

  // /**
  // * nj.fbrc_adder
  // * Four Bit Ripple Carry Adder
  // */
  // function fbrc_adder(x, y) {
  //
  // }

  /**
  * nj.sr_latch
  * SR (Set-Reset) Latch
  */
  function sr_latch(s, r) {
    output = [];

    var ng1 = nor(s, ng2);
    var ng2 = nor(r, ng1);

    output[0] = ng1;
    output[1] = ng2;

    return output;
  }

  this.sr_latch = function(s, r) {
    this.value = sr_latch(s, r);
  }

  /********************/
  /** Linear Algebra **/
  /********************/

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

      this.value[arguments[0]][arguments[1]] = value;
    }

    this.value = m;
    this.shape = "(" + dim(this.value) + ")";
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
    this.value = zeros(d);
    this.shape = "(" + dim(this.value) + ")";
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
    this.value = ones(d);
    this.shape = "(" + dim(this.value) + ")";
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
    this.value = set_eye(d);
    this.shape = "(" + dim(this.value) + ")";
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
    this.value = inner(v1, v2)
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
    this.value = dot(m1, m2)
  }

  /**
  * nj.forward_sub
  * Forward Substitution
  */
  function forward_sub(L, b) {
    var n = L.length;
    var c = b;

    for(var i = 0; i < n; i++) {
      if(L[i][i] == 0) {
        return -1;
      } else {
        for(var j = i + 1; j < n; j++) {
          c[j] = c[j] - (L[j][i] * c[i]);
        }
      }
    }

    return c;
  }

  this.forward_sub = function(L, b) {
    this.value = forward_sub(L, b);
  }

  /**
  * nj.backward_sub
  * Backward Substitution
  */
  function backward_sub(U, c) {
    var n = U.length;
    x = zeros([n]);

    for(var i = n -1; i >= 0; i--) {
      if(U[i][i] == 0) {
        return -1;
      } else {
        x[i] = c[i];

        for(var j = i + 1; i < n; i++) {
          x[i] = x[i] - U[i][j] * x[j];
        }

        x[i] = x[i] / U[i][i];
      }
    }

    return x;
  }

}

var nj = new nj();
