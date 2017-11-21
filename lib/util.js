export default {
  PIXI_CONFIG_TYPE: PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas',
  pixi: window.PIXI
}