"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeView = void 0;
const react_1 = __importDefault(require("react"));
const CodeView_module_css_1 = __importDefault(require("./CodeView.module.css"));
const package_js_1 = require("../package.js");
const Code_js_1 = require("../shapes/Code.js");
const prism_react_renderer_1 = require("prism-react-renderer");
const Hooks_1 = require("@_linked/react/utils/Hooks");
/*function useDarkMode() {

  const isDarkOS = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setDarkMode(event.matches);
  });
  return isDarkMode;
}*/
const query = Code_js_1.Code.select((code) => ({
    text: code.text,
}));
exports.CodeView = (0, package_js_1.linkedComponent)(query, (props) => {
    const isDarkOS = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    let { text, code, language, lineNumbers } = props;
    // const { isDarkMode, toggle, enable, disable } = useDarkMode()
    // const isDarkMode = useDarkMode()
    let styleProps = (0, Hooks_1.useStyles)(props, CodeView_module_css_1.default.CodeView);
    let theme = isDarkOS ? prism_react_renderer_1.themes.vsDark : prism_react_renderer_1.themes.github;
    // let theme = lightTheme;
    code = text || code || '';
    return (react_1.default.createElement("div", Object.assign({}, styleProps),
        react_1.default.createElement(prism_react_renderer_1.Highlight, { theme: theme, code: code, language: language }, ({ className, style, tokens, getLineProps, getTokenProps }) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("pre", { className: 'codeBlock ' + className, style: style }, tokens.map((line, i) => (react_1.default.createElement("div", Object.assign({ className: 'line', key: i }, getLineProps({ line, key: i })),
                lineNumbers !== false && (react_1.default.createElement("span", { className: 'lineNo' }, i + 1)),
                react_1.default.createElement("span", { className: 'lineContent' }, line.map((token, key) => (react_1.default.createElement("span", Object.assign({ key: key }, getTokenProps({ token, key })))))))))))))));
});
//register all components in this file
// registerPackageModule(module);
//# sourceMappingURL=CodeView.js.map