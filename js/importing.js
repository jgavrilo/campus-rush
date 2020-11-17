import * as particles from './node-modules/pixi-particles'

// Create a new emitter
      // note: if importing library like "import * as particles from 'pixi-particles'"
      // or "const particles = require('pixi-particles')", the PIXI namespace will
      // not be modified, and may not exist - use "new particles.Emitter()", or whatever
      // your imported namespace is
      var emitter = new PIXI.particles.Emitter(

        // The collection of particle images to use
        [PIXI.Texture.fromImage('images/row-1-col-1.png')],
  
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
      "alpha": {
          "start": 1,
          "end": 0
      },
      "scale": {
          "start": 0.3,
          "end": 0.01,
          "minimumScaleMultiplier": 0.96
      },
      "color": {
          "start": "#ffffff",
          "end": "#e09be0"
      },
      "speed": {
          "start": 150,
          "end": 0,
          "minimumSpeedMultiplier": 1
      },
      "acceleration": {
          "x": 0,
          "y": 0
      },
      "maxSpeed": 0,
      "startRotation": {
          "min": 4,
          "max": 360
      },
      "noRotation": false,
      "rotationSpeed": {
          "min": 1,
          "max": 500
      },
      "lifetime": {
          "min": 4,
          "max": 5
      },
      "blendMode": "normal",
      "frequency": 0.1,
      "emitterLifetime": -1,
      "maxParticles": 60,
      "pos": {
          "x": 0,
          "y": 0
      },
      "addAtBack": true,
      "spawnType": "point"
  });
      // Calculate the current time
      var elapsed = Date.now();
  
      // Update function every frame
      var update = function(){
  
        // Update the next frame
        requestAnimationFrame(update);
  
        var now = Date.now();
  
        // The emitter requires the elapsed
        // number of seconds since the last update
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
  
      // Should re-render the PIXI Stage
      // renderer.render(stage);
      };
  
      // Start emitting
      emitter.emit = true;
  
      // Start the update
      update();