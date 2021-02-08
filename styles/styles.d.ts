import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      title: string;
      primary: string;
      secondBackground: string;
      backgroundPage: string;
    };
  }
}
