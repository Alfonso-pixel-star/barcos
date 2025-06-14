"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CannonBall =
/*#__PURE__*/
function () {
  function CannonBall(x, y) {
    _classCallCheck(this, CannonBall);

    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.img = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  _createClass(CannonBall, [{
    key: "display",
    value: function display() {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.r, this.r);
      pop();
    }
  }]);

  return CannonBall;
}();
//# sourceMappingURL=cannonBall.dev.js.map
