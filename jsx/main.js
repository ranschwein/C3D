var C3D = require('./c3d.js');

Manager = new C3D();


function render(time){
  Manager.update(time);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
