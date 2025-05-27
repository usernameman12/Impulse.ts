import { Particle } from './Particle';

export class Collider {
  static checkCollision(a: Particle, b: Particle): boolean {
    const dx = a.position.x - b.position.x;
    const dy = a.position.y - b.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < a.radius + b.radius;
  }

  static resolveCollision(a: Particle, b: Particle) {
    if (!Collider.checkCollision(a, b)) return;

    // Simple elastic collision physics
    const normal = a.position.subtract(b.position).normalize();
    const relativeVelocity = a.velocity.subtract(b.velocity);
    const speed = relativeVelocity.dot(normal);

    if (speed > 0) return;

    const impulse = (2 * speed) / (a.mass + b.mass);
    a.velocity = a.velocity.subtract(normal.multiply(impulse * b.mass));
    b.velocity = b.velocity.add(normal.multiply(impulse * a.mass));
  }
}
