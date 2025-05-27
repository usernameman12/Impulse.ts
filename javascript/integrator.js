window.integrate = function(body, dt) {
  if (body.static) return;

  const accel = body.force.scale(body.invMass);
  body.velocity = body.velocity.add(accel.scale(dt));
  body.position = body.position.add(body.velocity.scale(dt));
  body.clearForce();
};
