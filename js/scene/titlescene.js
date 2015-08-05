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