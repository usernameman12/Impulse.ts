window.Body = class Body {
  constructor(el, mass = 1) {
    this.el = el;
    this.position = new Vector(parseFloat(el.style.left) || 0, parseFloat(el.style.top) || 0);
    this.velocity = new Vector(0, 0);
    this.force = new Vector(0, 0);
    this.mass = mass;
    this.invMass = mass === 0 ? 0 : 1 / mass;
    this.radius = parseFloat(el.dataset.radius) || 20;
    this.static = mass === 0;
  }

  applyForce(f) {
    this.force = this.force.add(f);
  }

  clearForce() {
    this.force = new Vector(0, 0);
  }

  render() {
    this.el.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }
};
