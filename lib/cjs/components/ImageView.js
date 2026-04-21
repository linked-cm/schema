"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageView = void 0;
const react_1 = __importDefault(require("react"));
const package_js_1 = require("../package.js");
const ImageObject_js_1 = require("../shapes/ImageObject.js");
const LinkedFileStorage_1 = require("@_linked/core/utils/LinkedFileStorage");
const query = ImageObject_js_1.ImageObject.select((imageObject) => ({
    contentUrl: imageObject.contentUrl,
}));
exports.ImageView = (0, package_js_1.linkedComponent)(query, (props) => {
    let { contentUrl, width, height, _refresh } = props, restProps = __rest(props, ["contentUrl", "width", "height", "_refresh"]);
    //when using restProps because we want to allow many other props, it's important to remove the source & shape prop
    //we could potentially make a utility for this
    delete restProps.source;
    // delete restProps.shape;
    return (react_1.default.createElement("img", Object.assign({}, restProps, { src: (0, LinkedFileStorage_1.asset)(contentUrl), width: width, height: height })));
});
//register all components in this file
// registerPackageModule(module);
//# sourceMappingURL=ImageView.js.map