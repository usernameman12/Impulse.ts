window.startLoop = function(world, dt) {
  function update() {
    world.step(dt);

    for (const body of world.bodies) {
      integrate(body, dt);
    }

    for (let i = 0; i < world.bodies.length; i++) {
      for (let j = i + 1; j < world.bodies.length; j++) {
        resolveCollision(world.bodies[i], world.bodies[j]);
      }
    }

    for (const body of world.bodies) {
      body.render();
    }

    requestAnimationFrame(update);
  }

  update();
};
