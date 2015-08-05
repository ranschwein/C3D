class Drawer {
  constructor() {
    this.GL = twgl.getWebGLContext(document.getElementById('canvas'));
    this.programInfo = twgl.createProgramInfo(this.GL, ['vs', 'fs']);
  }

  update(bufferInfo, uniforms) {
    this.GL.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.GL, this.programInfo, bufferInfo);
    twgl.setUniforms(this.programInfo, uniforms);
    twgl.drawBufferInfo(this.GL, this.GL.TRIANGLES, bufferInfo);
  }


  setFullBrowser() {
    twgl.resizeCanvasToDisplaySize(this.GL.canvas);
    this.GL.viewport(0, 0, this.GL.canvas.width, this.GL.canvas.height);
  }

  getCanvasWidth() {
    return this.GL.canvas.width;
  }
  getCanvasHeight() {
    return this.GL.canvas.height;
  }

  createBufferInfo(arrays) {
    return twgl.createBufferInfoFromArrays(this.GL, arrays);
  }

}


module.exports = Drawer;