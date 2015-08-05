
  function Drawer() {"use strict";
    this.GL = twgl.getWebGLContext(document.getElementById('canvas'));
    this.programInfo = twgl.createProgramInfo(this.GL, ['vs', 'fs']);
  }

  Object.defineProperty(Drawer.prototype,"update",{writable:true,configurable:true,value:function(bufferInfo, uniforms) {"use strict";
    this.GL.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.GL, this.programInfo, bufferInfo);
    twgl.setUniforms(this.programInfo, uniforms);
    twgl.drawBufferInfo(this.GL, this.GL.TRIANGLES, bufferInfo);
  }});


  Object.defineProperty(Drawer.prototype,"setFullBrowser",{writable:true,configurable:true,value:function() {"use strict";
    twgl.resizeCanvasToDisplaySize(this.GL.canvas);
    this.GL.viewport(0, 0, this.GL.canvas.width, this.GL.canvas.height);
  }});

  Object.defineProperty(Drawer.prototype,"getCanvasWidth",{writable:true,configurable:true,value:function() {"use strict";
    return this.GL.canvas.width;
  }});
  Object.defineProperty(Drawer.prototype,"getCanvasHeight",{writable:true,configurable:true,value:function() {"use strict";
    return this.GL.canvas.height;
  }});

  Object.defineProperty(Drawer.prototype,"createBufferInfo",{writable:true,configurable:true,value:function(arrays) {"use strict";
    return twgl.createBufferInfoFromArrays(this.GL, arrays);
  }});




module.exports = Drawer;