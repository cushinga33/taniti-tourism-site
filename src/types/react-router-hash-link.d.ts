declare module 'react-router-hash-link' {
  import { ComponentType, AnchorHTMLAttributes } from 'react';

  type HashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    smooth?: boolean;
  };

  const HashLink: ComponentType<HashLinkProps>;

  export { HashLink };
  export default HashLink;
}
