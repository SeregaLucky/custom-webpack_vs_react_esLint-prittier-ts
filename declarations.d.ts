// declare module '*.scss';
declare module '*.scss' {
  const styles: {
    readonly [key: string]: string;
  };
  export default styles;
}

// declare module '*.jpg';
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

// declare module '*.svg';
declare module '*.svg' {
  import React from 'react';

  const svg: string;
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export { ReactComponent };
  export default svg;
}
