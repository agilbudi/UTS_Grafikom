var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var contex = canvas.getContext('2d');
var sin = Math.sin(Math.PI / 6);
var cos = Math.cos(Math.PI / 6);
var centerX = 672.5;

function dropSaddow(offsetX,offsetY, size, transparansi) {
    contex.shadowOffsetX = offsetX;
    contex.shadowOffsetY = offsetY;
    contex.shadowBlur = size;
    contex.shadowColor = 'rgba(0, 0, 0, 0.'+ transparansi +')';
}

function text(type, text, x, y, size, font) {
    contex.font = size + "px " + font;
    contex.textBaseline = "top";
    if (type == 1) {
        contex.fillText(text, x, y);
    } else {
        contex.strokeText(text, x, y);
    }
}
function color(color) {
    contex.fillStyle = color;
    contex.strokeStyle = color;
}
function circle(x, y, d) {
    contex.beginPath();
    contex.arc(x, y, d, 0, 2 * Math.PI);
    contex.fill();
}
function rect(x, y, w, h) {
    contex.beginPath();
    contex.rect(x, y, w, h);
    contex.fill();
}
function elips(x, y, d, r) {
    contex.beginPath();
    contex.ellipse(x, y, r, d, Math.PI / 5, 0, 2 * Math.PI);
    contex.fill();
}
var img = new Image();

color('#d27d55');
rect(0, 0, 1325, 639); //background

contex.save();
contex.translate(centerX,0);
var e = 0;
for (let i = 0; i < 8; i++) {
    e = Math.floor(255 / 12 * i);
    color("rgba(210,210,210,0.2)");
    circle(0, 0, 100);
    contex.scale(1.3,1.3);
}
contex.restore();
contex.clearRect(0, 0, 1325, 80);

color('#253241');
rect(0, 0, 1325, 80); //topbar

contex.save();
contex.translate(1325, 639);
var o = 0;
for (var i = 0; i <= 12; i++) {
    o = Math.floor(255 / 12 * i);
    color("rgb(" + o + "," + o + "," + o + ")");
    rect(0, 0, 100, 100);
    contex.transform(cos, sin, -sin, cos, 0, 0);
}
contex.restore();
contex.save();
contex.translate(0, 639);
var c = 0;
for (var i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    color("rgb(" + c + "," + c + "," + c + ")");
    rect(0, 0, 100, 100);
    contex.transform(cos, sin, -sin, cos, 0, 0);
}
contex.restore();

contex.save();
color('#fff');
contex.translate(centerX, 260);
contex.scale(1.12, 1.12);
circle(0, 0, 85);
contex.restore();

contex.save();
dropSaddow(1,2,5,7);
color('#253241');
var xprofil = centerX;
var yprofil = 260;
circle(xprofil, yprofil, 85); //foto profil clip
contex.clip();
img.src = '';
//'https://firebasestorage.googleapis.com/v0/b/project-dummy-by-hide.appspot.com/o/me%2Fme.png?alt=media&token=99a68119-7753-41a8-bbf4-a5dfedcb0b68'; //'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png';
contex.drawImage(img, (xprofil-80), (yprofil-70), 160, 160);
contex.restore();

color("#fff");
text(1, "home", 25, 25, 32, "Bebas Neue");
text(1, "Agil Budi Prasetyo", 1130, 30, 25, "Bebas Neue");
contex.save();
contex.translate((centerX-145), 380);
text(1, "185410012", 65,0, 32, "Itim");
text(1, "Agil Budi Prasetyo", 15,35, 32, "Itim");

