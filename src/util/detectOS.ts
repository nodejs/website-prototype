export enum UserOS {
  MAC = 'MAC',
  WIN = 'WIN',
  UNIX = 'UNIX',
  LINUX = 'LINUX',
  MOBILE = 'MOBILE',
  UNKNOWN = 'UNKNOWN',
}

export function detectOS(): UserOS {
  let OS = UserOS.UNKNOWN;
  if (typeof window !== 'undefined') {
    switch (typeof navigator !== 'undefined') {
      case navigator.appVersion.includes('Win'):
        OS = UserOS.WIN;
        break;
      case navigator.appVersion.includes('Mac'):
        OS = UserOS.MAC;
        break;
      case navigator.appVersion.includes('X11'):
        OS = UserOS.UNIX;
        break;
      case navigator.appVersion.includes('Linux'):
        OS = UserOS.LINUX;
        break;
      case navigator.appVersion.includes('Mobi'):
        OS = UserOS.MOBILE;
        break;
      default:
        OS = UserOS.UNKNOWN;
        break;
    }
  }
  return OS;
}
