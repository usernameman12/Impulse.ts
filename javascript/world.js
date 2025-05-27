window.World = class World {
  constructor() {
    this.bodies = [];
    this.forces = [];
  }

  addBody(body) {
    this.bodies.push(body);
  }

  addForce(forceFn) {
    this.forces.push(forceFn);
  }

  step(dt) {
    for (const body of this.bodies) {
      for (const force of this.forces) {
        force(body);
      }
    }
  }
};
