"use strict";
function CalculateAreas(config) {
    var area = 1;
    area *= config.width || 2;
    return {
        area: area.toString()
    };
}
var test = CalculateAreas({ width: 3 });
console.log(test);
