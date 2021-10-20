/// <reference types="react-scripts" />
declare module JSX {
  interface IntrinsicElements {
    'react-mfe-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'react-mfe-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'angular-mfe-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'angular-mfe-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'image-randomizer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
