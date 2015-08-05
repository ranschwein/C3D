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