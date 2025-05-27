import { Particle } from './Particle';
import { Force } from './Force';
import { Collider } from './Collider';

export class PhysicsWorld {
  particles: Particle[] = [];
  forces: Force[] = [];

  addParticle(particle: Particle) {
    this.particles.push(particle);
  }

  addForce(force: Force) {
    this.forces.push(force);
  }

  update(dt: number) {
    // Apply forces to particles
    for (const particle of this.particles) {
      for (const force of this.forces) {
        force.apply(particle);
      }
    }

    // Update particles position
    for (const particle of this.particles) {
      particle.update(dt);
    }

    // Check collisions between particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        Collider.resolveCollision(this.particles[i], this.particles[j]);
      }
    }
  }
}
