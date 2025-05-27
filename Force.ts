import { Vector } from './Vector';
import { Particle } from './Particle';

export abstract class Force {
  abstract apply(particle: Particle): void;
}

export class Gravity extends Force {
  gravity: Vector;

  constructor(gravity: Vector) {
    super();
    this.gravity = gravity;
  }

  apply(particle: Particle) {
    const force = this.gravity.multiply(particle.mass);
    particle.applyForce(force);
  }
}