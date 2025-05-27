window.Vector = class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(v) { return new Vector(this.x + v.x, this.y + v.y); }
  sub(v) { return new Vector(this.x - v.x, this.y - v.y); }
  scale(s) { return new Vector(this.x * s, this.y * s); }
  dot(v) { return this.x * v.x + this.y * v.y; }
  mag() { return Math.hypot(this.x, this.y); }
  normalize() {
    const m = this.mag();
    return m === 0 ? new Vector(0, 0) : this.scale(1 / m);
  }
  clone() { return new Vector(this.x, this.y); }
};
