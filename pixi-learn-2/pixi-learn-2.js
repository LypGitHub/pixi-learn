import * as util from '../lib/util'

const { PIXI_CONFIG_TYPE, pixi } = util.default

if (!pixi) {
  throw Error('you should import pixiJs in your project')
}
pixi.utils.sayHello(PIXI_CONFIG_TYPE)

/*********************** Container ***********************/

// create app
const app = new pixi.Application(800, 600, { backgroudColor: 0x1099bb });
document.body.appendChild(app.view);

const container = new pixi.Container()

app.stage.addChild(container)

const texture = pixi.Texture.fromImage('http://pixijs.io/examples/required/assets/basics/bunny.png')
console.log('image: ', texture)

for (let i = 0; i < 25; i++) {
  const bunny = new pixi.Sprite(texture)
  // set postion or scale suport x, y point
  bunny.anchor.set(0.5)
  bunny.x = (i % 5) * 40
  bunny.y = Math.floor(i / 5) * 40
  container.addChild(bunny)
}

container.x = (app.renderer.width - container.width) / 2
container.y = (app.renderer.height - container.height) / 2

/*********************** Container ***********************/
