import React from 'react';
import style from './CodeView.module.css';
import { linkedComponent } from '../package.js';
import { Code } from '../shapes/Code.js';
import { Highlight, themes } from 'prism-react-renderer';
import { useStyles } from '@_linked/react/utils/Hooks';
/*function useDarkMode() {

  const isDarkOS = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setDarkMode(event.matches);
  });
  return isDarkMode;
}*/
const query = Code.select((code) => ({
    text: code.text,
}));
export const CodeView = linkedComponent(query, (props) => {
    const isDarkOS = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    let { text, code, language, lineNumbers } = props;
    // const { isDarkMode, toggle, enable, disable } = useDarkMode()
    // const isDarkMode = useDarkMode()
    let styleProps = useStyles(props, style.CodeView);
    let theme = isDarkOS ? themes.vsDark : themes.github;
    // let theme = lightTheme;
    code = text || code || '';
    return (React.createElement("div", { ...styleProps },
        React.createElement(Highlight, { theme: theme, code: code, language: language }, ({ className, style, tokens, getLineProps, getTokenProps }) => (React.createElement(React.Fragment, null,
            React.createElement("pre", { className: 'codeBlock ' + className, style: style }, tokens.map((line, i) => (React.createElement("div", { className: 'line', key: i, ...getLineProps({ line, key: i }) },
                lineNumbers !== false && (React.createElement("span", { className: 'lineNo' }, i + 1)),
                React.createElement("span", { className: 'lineContent' }, line.map((token, key) => (React.createElement("span", { key: key, ...getTokenProps({ token, key }) })))))))))))));
});
//register all components in this file
// registerPackageModule(module);
//# sourceMappingURL=CodeView.js.map