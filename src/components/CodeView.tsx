import React from 'react';
import style from './CodeView.module.css';
import { linkedComponent } from '../package.js';
import { Code } from '../shapes/Code.js';
import { Highlight, themes } from 'prism-react-renderer';
import { useStyles } from '@_linked/react/utils/Hooks';

interface CodeViewProps {
  code?: string;
  language?: string;
  lineNumbers?: boolean;
  // copy?: boolean;
}

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

type CodeViewData = {
  text?: string;
};

export const CodeView = linkedComponent<typeof query, CodeViewProps>(
  query,
  (props: CodeViewProps & CodeViewData) => {
    const isDarkOS =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    let { text, code, language, lineNumbers } = props;
    // const { isDarkMode, toggle, enable, disable } = useDarkMode()
    // const isDarkMode = useDarkMode()
    let styleProps = useStyles(props, style.CodeView);

    let theme = isDarkOS ? themes.vsDark : themes.github;
    // let theme = lightTheme;
    code = text || code || '';

    return (
      <div {...styleProps}>
        <Highlight theme={theme} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <>
              <pre className={'codeBlock ' + className} style={style}>
                {tokens.map((line, i) => (
                  <div
                    className={'line'}
                    key={i}
                    {...getLineProps({ line, key: i })}
                  >
                    {lineNumbers !== false && (
                      <span className={'lineNo'}>{i + 1}</span>
                    )}
                    <span className={'lineContent'}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
              {/*{copy && (*/}
              {/*  <IconButton*/}
              {/*    onClick={() => navigator.clipboard.writeText(code)}*/}
              {/*    icon={faCopy}*/}
              {/*    temporaryClickedIcon={faCheck}*/}
              {/*    title={'Copy'}*/}
              {/*  />*/}
              {/*)}*/}
            </>
          )}
        </Highlight>
      </div>
    );
  }
);

//register all components in this file
// registerPackageModule(module);
