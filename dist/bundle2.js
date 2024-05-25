(() => {
  var e = {
      698: (e) => {
        e.exports = "Welcome to Webpack Class dear student.";
      },
      585: (e) => {
        e.exports = {
          getMessage: function () {
            return "Welcome to Bathphage ICT Center";
          },
          getGreeting: function () {
            return "Hello! our amiable student";
          },
        };
      },
    },
    t = {};
  function o(r) {
    var n = t[r];

    if (void 0 !== n) return n.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, o), s.exports;
  }
  (() => {
    let e = o(698);
    const { getMessage: t, getGreeting: r } = o(585);
    alert(e), console.log(t()), console.log(r());
  })();
})();
