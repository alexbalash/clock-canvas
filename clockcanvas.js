x = 150;//координаты центра круга
y = 150;//
var radius = 120;//радиус
var main = document.getElementById('main');
var mainHeight = 300;// высота круга цифр
var clock = document.getElementById('canvas');
var ctx = clock.getContext('2d');

function drawClock() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, Math.PI * 2, false);
    ctx.fill();
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    drawPointer(h * 30 - 90, 50, "black", 6);
    drawPointer(m * 6 - 90, 100, "black", 4);
    drawPointer(s * 6 - 90, 100, "black", 4);
}

function drawPointer(deg, len, color, w) {
    rad = (Math.PI / 180 * deg);
    x1 = x + Math.cos(rad) * len;
    y1 = y + Math.sin(rad) * len;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}
setInterval(drawClock, 1000);
var setup = function() {
    var theta = [(Math.PI / 3), (Math.PI / 6), (Math.PI * 2), (11 * (Math.PI / 6)), (5 * (Math.PI / 3)), (3 * (Math.PI / 2)), (4 * (Math.PI / 3)), (7 * (Math.PI / 6)), Math.PI, (5 * (Math.PI / 6)), (2 * (Math.PI / 3)), (Math.PI / 2)];
    var circleArray = [];
    for (var i = 0; i < 12; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle number' + i;
        circleArray.push(circle);
        circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.backgroundColor = 'green';
        circleArray[i].textContent = (i + 1);
        circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
    }
};
setup();
setInterval(updateTime, 1000);

function updateTime() {
    var currTime = new Date();
    var currTimeStr = formatDateTime(currTime);
    document.getElementById('timedigit').innerHTML = currTimeStr;
}

function formatDateTime(dt) {
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();
    return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
}

function str0l(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
        strVal = '0' + strVal;
    return strVal;
}