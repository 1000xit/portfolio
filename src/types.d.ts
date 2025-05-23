// Add MDX file type declaration
declare module '*.mdx' {
  import { ReactNode } from 'react';
  const MDXComponent: (props: any) => ReactNode;
  export default MDXComponent;
} 