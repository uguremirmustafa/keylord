import { useEffect, useRef, useState } from 'react';

export function useKeyPress() {
  const [pressedKey, setPressedKey] = useState<null | KeyboardEvent['key']>(null);
  const [keyCode, setKeyCode] = useState<null | KeyboardEvent['code']>(null);
  const latestKey = useRef<null | KeyboardEvent['key']>(null);
  const latestKeyCode = useRef<null | KeyboardEvent['code']>(null);

  function downHandler(e: KeyboardEvent): void {
    if (e.key === 'Tab' || e.key === 'ContextMenu') {
      e.preventDefault();
    }
    setPressedKey(e.key);
    setKeyCode(e.code);
  }
  // If released key is our target key then set to false
  const upHandler = (e: KeyboardEvent): void => {
    setPressedKey((old) => {
      latestKey.current = old;
      return null;
    });
    setKeyCode((old) => {
      latestKeyCode.current = old;
      return null;
    });
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return {
    pressedKey,
    keyCode,
    latestKey: { code: latestKeyCode.current, key: latestKey.current },
  };
}
