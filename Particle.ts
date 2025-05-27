import { Vector } from './Vector';

export class Particle {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  mass: number;
  radius: number;

  constructor(position: Vector, mass = 1, radius = 5) {
    this.position = position;
    this.velocity = new Vector();
    this.acceleration = new Vector();
    this.mass = mass;
    this.radius = radius;
  }

  applyForce(force: Vector) {
    // F = ma => a = F/m
    const f = force.divide(this.mass);
    this.acceleration = this.acceleration.add(f);
  }

  update(dt: number) {
    this.velocity = this.velocity.add(this.acceleration.multiply(dt));
    this.position = this.position.add(this.velocity.multiply(dt));
    this.acceleration = new Vector(); // Reset acceleration after update
  }
}
