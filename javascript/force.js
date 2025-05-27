window.Forces = {
  gravity: new Vector(0, 500), // pixels/sec²

  applyGravity(body) {
    if (!body.static) {
      body.applyForce(this.gravity.scale(body.mass));
    }
  }
};
