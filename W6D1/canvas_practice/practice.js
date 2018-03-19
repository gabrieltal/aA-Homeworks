document.addEventListener("DOMContentLoaded", function(){
  const el = document.getElementById("myCanvas");
  el.height = 500;
  el.width = 500;

  const ctx = el.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.fillStyle = "green";
  ctx.fill();

});
