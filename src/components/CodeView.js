"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeView = void 0;
var react_1 = __importDefault(require("react"));
var CodeView_module_css_1 = __importDefault(require("./CodeView.module.css"));
var package_js_1 = require("../package.js");
var Code_js_1 = require("../shapes/Code.js");
var prism_react_renderer_1 = require("prism-react-renderer");
var Hooks_1 = require("@_linked/react/utils/Hooks");
/*function useDarkMode() {

  const isDarkOS = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setDarkMode(event.matches);
  });
  return isDarkMode;
}*/
var query = Code_js_1.Code.select(function (code) { return ({
    text: code.text,
}); });
exports.CodeView = (0, package_js_1.linkedComponent)(query, function (props) {
    var isDarkOS = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    var text = props.text, code = props.code, language = props.language, lineNumbers = props.lineNumbers;
    // const { isDarkMode, toggle, enable, disable } = useDarkMode()
    // const isDarkMode = useDarkMode()
    var styleProps = (0, Hooks_1.useStyles)(props, CodeView_module_css_1.default.CodeView);
    var theme = isDarkOS ? prism_react_renderer_1.themes.vsDark : prism_react_renderer_1.themes.github;
    // let theme = lightTheme;
    code = text || code || '';
    return (react_1.default.createElement("div", __assign({}, styleProps),
        react_1.default.createElement(prism_react_renderer_1.Highlight, { theme: theme, code: code, language: language }, function (_a) {
            var className = _a.className, style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("pre", { className: 'codeBlock ' + className, style: style }, tokens.map(function (line, i) { return (react_1.default.createElement("div", __assign({ className: 'line', key: i }, getLineProps({ line: line, key: i })),
                    lineNumbers !== false && (react_1.default.createElement("span", { className: 'lineNo' }, i + 1)),
                    react_1.default.createElement("span", { className: 'lineContent' }, line.map(function (token, key) { return (react_1.default.createElement("span", __assign({ key: key }, getTokenProps({ token: token, key: key })))); })))); }))));
        })));
});
//register all components in this file
// registerPackageModule(module);
//# sourceMappingURL=CodeView.js.map