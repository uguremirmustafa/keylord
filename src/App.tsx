import './App.css';
import { firstLine, KeyboardKey, secondLine, thirdLine, forthLine, fifthLine } from './keys';
import { useKeyPress } from './useKeyPress';

type KeyPress = ReturnType<typeof useKeyPress>;

function App() {
  const keypress = useKeyPress();

  return (
    <div>
      <div className="key_info">
        <span className="label">{keypress.latestKey ? 'Key Code' : 'Press a key!'}</span>
        <span className="content">
          {keypress.latestKey.code ?? '-'} / {keypress.latestKey.keyCode ?? '-'}
        </span>
      </div>
      <div className="keyboard">
        <div className="line line1">
          {firstLine.map((x) => (
            <Button {...x} keypress={keypress} />
          ))}
        </div>
        <div className="line line2">
          {secondLine.map((x) => (
            <Button {...x} keypress={keypress} />
          ))}
        </div>
        <div className="line line3">
          {thirdLine.map((x) => (
            <Button {...x} keypress={keypress} />
          ))}
        </div>
        <div className="line line4">
          {forthLine.map((x) => (
            <Button {...x} keypress={keypress} />
          ))}
        </div>
        <div className="line line5">
          {fifthLine.map((x) => (
            <Button {...x} keypress={keypress} />
          ))}
        </div>
      </div>
      <footer>
        created by <a href="https://devugur.com">devugur</a>
      </footer>
    </div>
  );
}

export default App;

const Button = (props: KeyboardKey & { keypress: KeyPress }) => {
  const { className, code, content, keypress, keyCode } = props;
  const { keyCode: actualKeyCode, pressedKey } = keypress;

  let _pressedKey = pressedKey;

  const isPressed =
    content === _pressedKey?.toLocaleLowerCase() ||
    (keyCode === actualKeyCode && actualKeyCode !== null);

  const isSpace = content === ' ';

  return (
    <button
      data-code={code}
      className={`${className} ${isPressed ? 'active' : ''} ${isSpace ? 'isSpace' : ''}`}
    >
      {content}
    </button>
  );
};
