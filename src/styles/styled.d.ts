import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      gray: string;
      metallic: string;
      accent: string;
    };
    fonts: {
      title: string;
      body: string;
    };
  }
}
