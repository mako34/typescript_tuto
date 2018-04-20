//way to logically group related code
//avoid "global namespace pollution problem" in JS
var SomenameSpace;
(function (SomenameSpace) {
    var SomeClassName = /** @class */ (function () {
        function SomeClassName() {
        }
        return SomeClassName;
    }());
    SomenameSpace.SomeClassName = SomeClassName;
})(SomenameSpace || (SomenameSpace = {}));
SomenameSpace.SomeClassName;
//
