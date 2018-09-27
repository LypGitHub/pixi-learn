<template>
  <div class="pixi-container">
    
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'Container',

  mounted() {
    const app = new PIXI.Application(800, 500, {
      backgroundColor: 0xEEEEEE,
    });

    document.querySelector('.pixi-container').appendChild(app.view);
    // this.triangle(app);
    // this.ellipse(app);
    // this.drawShape(app);
  },

  methods: {
    drawShape(app) {
      const graphics = new PIXI.Graphics();
      const circle = new PIXI.Circle(100, 100, 100, 100);
      graphics.lineStyle(2, 0xFF00FF, 1);
      graphics.beginFill(0x000000);
      // 给定路径绘制
      graphics.drawShape(circle);
      graphics.endFill();
      app.stage.addChild(graphics); 
    },
    ellipse(app) {
      const graphics = new PIXI.Graphics();
      graphics.lineStyle(2, 0xFF00FF, 1);
      graphics.beginFill(0x000000);
      graphics.drawEllipse(100, 200, 100, 200);
      graphics.endFill();
      app.stage.addChild(graphics);
    },

    triangle(app) {

      const graphics = new PIXI.Graphics();

      graphics.beginFill(0x000000);
      graphics.lineStyle(4, 0xFF66FF, 0.5);

      graphics.moveTo(50,50);
      graphics.lineTo(250, 50);
      graphics.lineTo(100, 100);
      graphics.lineTo(50, 50);
      graphics.endFill();

      app.stage.addChild(graphics);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pixi-container {

}
</style>
