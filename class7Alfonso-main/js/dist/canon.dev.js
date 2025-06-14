"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canon =
/*#__PURE__*/
function () {
  function Canon(x, y, width, height, angle) {
    _classCallCheck(this, Canon);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_img = loadImage("./assets/canon.png");
    this.canon_base = loadImage("./assets/cannonBase.png");
  }

  _createClass(Canon, [{
    key: "display",
    value: function display() {
      if (keyIsDown(RIGHT_ARROW)) {
        this.angle += 1;
      }

      if (keyIsDown(LEFT_ARROW)) {
        this.angle -= 1;
      }

      push();
      translate(this.x, this.y);
      rotate(this.angle); //rectMode(CENTER);
      //rect(this.x, this.y, this.width, this.height);

      imageMode(CENTER);
      image(this.canon_img, 0, 0, this.width, this.height);
      pop();
      push(); //rect(170, 125, 200, 200);

      imageMode(CENTER);
      image(this.canon_base, 170, 125, 200, 200);
      pop();
      noFill();
    }
  }]);

  return Canon;
}();
//# sourceMappingURL=canon.dev.js.map
