var fs = require('fs');

function takescreenshot() {
    imgfile = __dirname + '/../screenshots/file.png';
    browser.takeScreenshot().then(function (data) {
        console.log('saving screenshot to ' + imgfile);
        var base64Data = data.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(imgfile, base64Data, 'base64', function (err) {
            console.log("writing imagetofile");
            if (err) {
                throw err;
            }
        })
    })
}


module.exports = {
    assertTrue: function (value) {
        takescreenshot();
        expect(value).toBe(true)
    },
    assertEqual: function (label, actual, expet) {
        var actms = label + " is " + actual;
        var exptms = label + " should be " + expet;
        console.log(actms + " " + exptms);
        takescreenshot();
        expect(actual).toEqual(expet)
    },
    assertContains: function (label, actual, expet) {
        var actms = label + " contains " + actual;
        var exptms = label + " should contain " + expet;
        console.log(actms + " " + exptms);
        takescreenshot();
        expect(actual).toContain(expet)
    }

};