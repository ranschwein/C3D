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
    if(Detector.canCanvas() && Detector.canWebGL()) {
      SceneManager.call(this);
    } else {
      alert("最新のブラウザ、または、グラフィックボードのあるPC、スマートフォンを使ってください");
    }

    this.scene = SceneManager.setScene("title", {});
  }

  Object.defineProperty(C3D.prototype,"update",{writable:true,configurable:true,value:function() {"use strict";
    this.scene.update();
  }});



module.exports = C3D;
},{"./api/detector.js":1,"./scene/manager.js":4}],3:[function(require,module,exports){
var C3D = require('./c3d.js');

mGAME = new C3D();


function render(time){
  mGAME.update();
  requestAnimationFrame(render);
}
requestAnimationFrame(render);





var gl = twgl.getWebGLContext(document.getElementById('canvas'));
var programInfo = twgl.createProgramInfo(gl, ['vs', 'fs']);

var arrays = {
  position: [-1, -1, 0, 1,
             -1, 0, -1, 1,
              0, -1, 1, 0,
              1, -1, 0, 1, 1, 0],
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  var uniforms = {
    time: time * 0.001,
    resolution: [gl.canvas.width, gl.canvas.height],
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

},{"./c3d.js":2}],4:[function(require,module,exports){
var SceneTable = require('./scenetable.js');



  function SceneManager() {"use strict";
    this.sceneTable = SceneTable;
  }

  Object.defineProperty(SceneManager,"setScene",{writable:true,configurable:true,value:function(scene_name, params) {"use strict";
    return new this.scenetable[scene_name](params);
  }});



module.exports = SceneManager;
},{"./scenetable.js":6}],5:[function(require,module,exports){

  function SceneClass(params) {"use strict";

  }

  Object.defineProperty(SceneClass.prototype,"update",{writable:true,configurable:true,value:function() {"use strict";

  }});



module.exports = SceneClass;
},{}],6:[function(require,module,exports){
var SceneClass = require('./sceneclass.js');


var SceneTable = {
  title: (function(){for(var SceneClass____Key in SceneClass){if(SceneClass.hasOwnProperty(SceneClass____Key)){titleScene[SceneClass____Key]=SceneClass[SceneClass____Key];}}var ____SuperProtoOfSceneClass=SceneClass===null?null:SceneClass.prototype;titleScene.prototype=Object.create(____SuperProtoOfSceneClass);titleScene.prototype.constructor=titleScene;titleScene.__superConstructor__=SceneClass;
    function titleScene(params) {"use strict";
      SceneClass.call(this,params);
    }


  return titleScene;})(),
};


module.exports = SceneTable;
},{"./sceneclass.js":5}]},{},[3]);
