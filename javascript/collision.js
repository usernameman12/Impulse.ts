window.resolveCollision = function(bodyA, bodyB) {
  const delta = bodyB.position.sub(bodyA.position);
  const dist = delta.mag();
  const overlap = bodyA.radius + bodyB.radius - dist;

  if (overlap > 0 && dist !== 0) {
    const normal = delta.normalize();
    const correction = normal.scale(overlap / 2);

    if (!bodyA.static)
      bodyA.position = bodyA.position.sub(correction);
    if (!bodyB.static)
      bodyB.position = bodyB.position.add(correction);

    const relativeVelocity = bodyB.velocity.sub(bodyA.velocity);
    const velAlongNormal = relativeVelocity.dot(normal);
    if (velAlongNormal > 0) return;

    const restitution = 0.8;
    const impulseMag = -(1 + restitution) * velAlongNormal / (bodyA.invMass + bodyB.invMass);
    const impulse = normal.scale(impulseMag);

    if (!bodyA.static)
      bodyA.velocity = bodyA.velocity.sub(impulse.scale(bodyA.invMass));
    if (!bodyB.static)
      bodyB.velocity = bodyB.velocity.add(impulse.scale(bodyB.invMass));
  }
};
