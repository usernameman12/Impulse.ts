import { Vector, Particle, Gravity, PhysicsWorld } from './index';

const world = new PhysicsWorld();

const p1 = new Particle(new Vector(0, 0), 1, 10);
const p2 = new Particle(new Vector(15, 0), 1, 10);

world.addParticle(p1);
world.addParticle(p2);
world.addForce(new Gravity(new Vector(0, 9.8)));

setInterval(() => {
  world.update(0.016); // ~60fps
  console.log(p1.position, p2.position);
}, 16);
