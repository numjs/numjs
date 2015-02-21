var nj = function(x) {
  this.array = function(x) {
    function dim(a) {
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

    this.insert = function() {
      var value = arguments[arguments.length - 1];

      // for (var i = 0; i < arguments.length - 1; i++) {
      //   alert(arguments[i]);
      // }

      x[arguments[0]][arguments[1]] = value;
    }

    this.matrix = x;
    this.shape = "(" + dim(x) + ")";
    this.type = typeof(x);

  };
}
