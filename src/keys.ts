export interface KeyboardKey {
  className: string;
  code: number;
  content: string;
  keyCode?: string;
}

export const firstLine: KeyboardKey[] = [
  {
    className: 'k esc danger',
    code: 27,
    content: 'esc',
    keyCode: 'Escape',
  },
  {
    className: 'k rk nk',
    code: 49,
    content: '1',
  },
  {
    className: 'k rk nk',
    code: 50,
    content: '2',
  },
  {
    className: 'k rk nk',
    code: 51,
    content: '3',
  },
  {
    className: 'k rk nk',
    code: 52,
    content: '4',
  },
  {
    className: 'k rk nk sc',
    code: 53,
    content: '5',
  },
  {
    className: 'k rk nk sc',
    code: 54,
    content: '6',
  },
  {
    className: 'k rk nk sc',
    code: 55,
    content: '7',
  },
  {
    className: 'k rk nk sc',
    code: 56,
    content: '8',
  },
  {
    className: 'k rk nk',
    code: 57,
    content: '9',
  },
  {
    className: 'k rk nk',
    code: 48,
    content: '0',
  },
  {
    className: 'k rk nk',
    code: 189,
    content: '-',
  },
  {
    className: 'k rk nk',
    code: 187,
    content: '=',
  },
  {
    className: 'k backspace sc',
    code: 8,
    content: 'backspace',
  },
  {
    className: 'k ins rk',
    code: 46,
    content: 'ins',
    keyCode: 'Insert',
  },
  {
    className: 'k home rk',
    code: 36,
    content: 'home',
    keyCode: 'Home',
  },
  {
    className: 'k pu rk',
    code: 33,
    content: 'pu',
    keyCode: 'PageUp',
  },
];

export const secondLine: KeyboardKey[] = [
  {
    className: 'k tab sc',
    code: 9,
    content: '↹ tab',
    keyCode: 'Tab',
  },
  {
    className: 'k rk',
    code: 81,
    content: 'q',
  },
  {
    className: 'k rk',
    code: 87,
    content: 'w',
  },
  {
    className: 'k rk',
    code: 69,
    content: 'e',
  },
  {
    className: 'k rk',
    code: 82,
    content: 'r',
  },
  {
    className: 'k rk',
    code: 84,
    content: 't',
  },
  {
    className: 'k rk',
    code: 89,
    content: 'y',
  },
  {
    className: 'k rk',
    code: 85,
    content: 'u',
  },
  {
    className: 'k rk',
    code: 73,
    content: 'i',
  },
  {
    className: 'k rk',
    code: 79,
    content: 'o',
  },
  {
    className: 'k rk',
    code: 80,
    content: 'p',
  },
  {
    className: 'k rk',
    code: 219,
    content: '[',
  },
  {
    className: 'k rk',
    code: 221,
    content: ']',
  },
  {
    className: 'k backslash sc',
    code: 220,
    content: '\\',
  },
  {
    className: 'k danger del',
    code: 46,
    content: 'del',
    keyCode: 'Delete',
  },
  {
    className: 'k end rk',
    code: 35,
    content: 'end',
    keyCode: 'End',
  },
  {
    className: 'k pd rk',
    code: 34,
    content: 'pd',
    keyCode: 'PageDown',
  },
];

export const thirdLine: KeyboardKey[] = [
  {
    className: 'k capslock sc',
    code: 20,
    content: 'capslock',
  },
  {
    className: 'k rk',
    code: 65,
    content: 'a',
  },
  {
    className: 'k rk',
    code: 83,
    content: 's',
  },
  {
    className: 'k rk',
    code: 68,
    content: 'd',
  },
  {
    className: 'k rk',
    code: 70,
    content: 'f',
  },
  {
    className: 'k rk',
    code: 71,
    content: 'g',
  },
  {
    className: 'k rk',
    code: 72,
    content: 'h',
  },
  {
    className: 'k rk',
    code: 74,
    content: 'j',
  },
  {
    className: 'k rk',
    code: 75,
    content: 'k',
  },
  {
    className: 'k rk',
    code: 76,
    content: 'l',
  },
  {
    className: 'k rk',
    code: 186,
    content: ';',
  },
  {
    className: 'k rk',
    code: 222,
    content: "'",
  },
  {
    className: 'k enter danger',
    code: 13,
    content: '↵ enter',
    keyCode: 'Enter',
  },
];

export const forthLine: KeyboardKey[] = [
  {
    className: 'k leftshift sc',
    code: 16,
    content: '⇧ shift',
    keyCode: 'ShiftLeft',
  },
  {
    className: 'k rk',
    code: 90,
    content: 'z',
  },
  {
    className: 'k rk',
    code: 88,
    content: 'x',
  },
  {
    className: 'k rk',
    code: 67,
    content: 'c',
  },
  {
    className: 'k rk',
    code: 86,
    content: 'v',
  },
  {
    className: 'k rk',
    code: 66,
    content: 'b',
  },
  {
    className: 'k rk',
    code: 78,
    content: 'n',
  },
  {
    className: 'k rk',
    code: 77,
    content: 'm',
  },
  {
    className: 'k rk',
    code: 188,
    content: ',',
  },
  {
    className: 'k rk',
    code: 190,
    content: '.',
  },
  {
    className: 'k rk',
    code: 191,
    content: '/',
  },
  {
    className: 'k sc rightshift',
    code: 16,
    content: '⇧ shift',
    keyCode: 'ShiftRight',
  },
  {
    className: 'k empty',
    code: 0,
    content: '',
    keyCode: 'ShiftRight',
  },
  {
    className: 'k rk arrow',
    code: 16,
    content: '↑',
    keyCode: 'ArrowUp',
  },
];

export const fifthLine: KeyboardKey[] = [
  {
    className: 'k control sc',
    code: 17,
    content: 'ctrl',
    keyCode: 'ControlLeft',
  },
  {
    className: 'k meta sc',
    code: 17,
    content: '⌘',
    keyCode: 'MetaLeft',
  },
  {
    className: 'k alt sc',
    code: 18,
    content: '⎇ ',
    keyCode: 'AltLeft',
  },
  {
    className: 'k space rk',
    code: 32,
    content: ' ',
  },
  {
    className: 'k alt sc',
    code: 18,
    content: '⌥',
    keyCode: 'AltRight',
  },
  {
    className: 'k meta sc',
    code: 17,
    content: '⌘',
    keyCode: 'MetaRight',
  },
  {
    className: 'k context sc',
    code: 93,
    content: '▤',
    keyCode: 'ContextMenu',
  },
  {
    className: 'k control sc',
    code: 39,
    content: 'ctrl',
    keyCode: 'ControlRight',
  },
  {
    className: 'k rk arrow',
    code: 37,
    content: '←',
    keyCode: 'ArrowLeft',
  },
  {
    className: 'k rk arrow',
    code: 40,
    content: '↓',
    keyCode: 'ArrowDown',
  },
  {
    className: 'k rk arrow',
    code: 39,
    content: '→',
    keyCode: 'ArrowRight',
  },
];
