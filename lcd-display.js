var lcd = {
    e: document.querySelector('.lcd'),
    ctx: null,
    setPixel: function (x, y, r, g, b) {
        lcd.ctx.fillStyle = `rgb(${r},${g},${b})`
        lcd.ctx.fillRect(x, y, 1, 1);
    },
    blackout: function () {
        for(var i = 0; i < 300; i++) {
            for(var j = 0; j < 400; j++) {
                lcd.setPixel(j,i,0,0,0);
            }
        }
    }
}
lcd.ctx = lcd.e.getContext('2d');

lcd.blackout();
