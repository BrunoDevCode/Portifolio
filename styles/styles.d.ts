import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pageText: string;
      title: string;
      primary: string;
      darkPrimary: string;
      secondBackground: string;
      backgroundPage: string;
      backgroundHeader: string;
    };
  }
}
