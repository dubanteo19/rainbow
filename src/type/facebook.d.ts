export {};

declare global {
  interface Window {
    FB: FacebookSDK;
  }

  interface FacebookSDK {
    XFBML: {
      parse: (element?: HTMLElement | undefined, callback?: () => void) => void;
    };
    // You can add more here later as needed
  }
}
