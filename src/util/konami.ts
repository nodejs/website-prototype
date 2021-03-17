// SSR Protection
if (typeof window !== `undefined`) {
  // eslint-disable-next-line no-bitwise
  const contains = (a: string, b: string): boolean => !!~a.indexOf(b);

  // Left, Up, Right, Down, A, B
  const VALID_KEYS = new Set([37, 38, 39, 40, 65, 66]);
  // ⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ b a
  const CODE_SEQUENCE = '38384040373937396665';
  // 1.5s cooldown
  const MAX_DELAY = 1500;
  // Our Custom Event
  const KONAMI_EVENT = new Event('konamiCode');

  (function initKonami(): void {
    let buffer = '';
    let lastDate = Date.now();

    document.addEventListener('keyup', function triggerKonami({
      keyCode,
    }): void {
      if (!VALID_KEYS.has(keyCode)) {
        return;
      }
      buffer = `${Date.now() - lastDate >= MAX_DELAY ? '' : buffer}${keyCode}`;
      lastDate = Date.now();
      if (!contains(buffer, CODE_SEQUENCE)) {
        return;
      }
      document.dispatchEvent(KONAMI_EVENT);
      buffer = '';
    });
  })();

  let discoMode: NodeJS.Timeout | null = null;
  document.addEventListener('konamiCode', (): void => {
    if (discoMode) {
      return clearInterval(discoMode);
    }
    discoMode = setInterval(
      (): boolean => document.body.classList.toggle('dark-mode'),
      300
    );
  });
}
