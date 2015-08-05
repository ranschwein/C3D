(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CanvasDetector = {
    canCanvas: function () {
        return !!window.CanvasRenderingContext2D
    },
    canWebGL: function () {
        try {
            return !!window.WebGLRenderingContext && !!document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
        } catch( e ) {
            return false;
        }
    }
};


module.exports = CanvasDetector;
},{}],2:[function(require,module,exports){
var SceneManager = require('./scene/manager.js'),
    Detector = require('./api/detector.js');


for(var SceneManager____Key in SceneManager){if(SceneManager.hasOwnProperty(SceneManager____Key)){C3D[SceneManager____Key]=SceneManager[SceneManager____Key];}}var ____SuperProtoOfSceneManager=SceneManager===null?null:SceneManager.prototype;C3D.prototype=Object.create(____SuperProtoOfSceneManager);C3D.prototype.constructor=C3D;C3D.__superConstructor__=SceneManager;
  function C3D() {"use strict";
    if(!twgl) {
      console.log("twgl の読み込みを確認してください");
    }
    if(!Detector.canCanvas() || !Detector.canWebGL()) {
      alert("最新のブラウザ、または、グラフィックボードのあるPC、スマートフォンを使ってください");
    }

    SceneManager.call(this);
    ____SuperProtoOfSceneManager.setScene.call(this,"title", {drawer: this.drawer});
  }

  Object.defineProperty(C3D.prototype,"update",{writable:true,configurable:true,value:function(time) {"use strict";
    this.scene.update(time);
  }});



module.exports = C3D;
},{"./api/detector.js":1,"./scene/manager.js":5}],3:[function(require,module,exports){

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
},{}],4:[function(require,module,exports){
var C3D = require('./c3d.js');

Manager = new C3D();


function render(time){
  Manager.update(time);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

},{"./c3d.js":2}],5:[function(require,module,exports){
var SceneTable = require('./scenetable.js'),
    Drawer = require('../draw/drawer.js');



  function SceneManager() {"use strict";
    this.drawer = new Drawer();
  }

  Object.defineProperty(SceneManager.prototype,"setScene",{writable:true,configurable:true,value:function(scene_name, params) {"use strict";
    this.scene =  new SceneManager.sceneTable[scene_name](params);
  }});


SceneManager.sceneTable = SceneTable;


module.exports = SceneManager;
},{"../draw/drawer.js":3,"./scenetable.js":7}],6:[function(require,module,exports){

  function SceneClass(params) {"use strict";
    this.drawer = params.drawer;
  }

  Object.defineProperty(SceneClass.prototype,"update",{writable:true,configurable:true,value:function(time) {"use strict";
    alert("Override update METHOD!");
  }});



module.exports = SceneClass;
},{}],7:[function(require,module,exports){
var TitleScene = require('./titlescene.js');


var SceneTable = {
  title: TitleScene,

};


module.exports = SceneTable;
},{"./titlescene.js":8}],8:[function(require,module,exports){
var SceneClass = require('./sceneclass.js');


for(var SceneClass____Key in SceneClass){if(SceneClass.hasOwnProperty(SceneClass____Key)){TitleScene[SceneClass____Key]=SceneClass[SceneClass____Key];}}var ____SuperProtoOfSceneClass=SceneClass===null?null:SceneClass.prototype;TitleScene.prototype=Object.create(____SuperProtoOfSceneClass);TitleScene.prototype.constructor=TitleScene;TitleScene.__superConstructor__=SceneClass;
  function TitleScene(params) {"use strict";
    SceneClass.call(this,params);

    this.arrays = {
      position: [
        -1, -1,  0,
         1, -1,  0,
        -1,  1,  0,
        -1,  1,  0,
         1, -1,  0,
         1,  1,  0
      ],
    };

    this.bufferInfo = this.drawer.createBufferInfo(this.arrays);
  }

  Object.defineProperty(TitleScene.prototype,"update",{writable:true,configurable:true,value:function(time) {"use strict";
    var uniforms = {
      time: time * 0.001,
      resolution: [this.drawer.getCanvasWidth(), this.drawer.getCanvasHeight()],
    };
    this.drawer.update(this.bufferInfo, uniforms);
  }});



module.exports = TitleScene;
},{"./sceneclass.js":6}]},{},[4]);
