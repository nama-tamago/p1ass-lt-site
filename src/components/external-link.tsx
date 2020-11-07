type ExternalLinkProps = {
  href: string;
  className?: string;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, className, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" className={className} {...props}>
    {children}
  </a>
);
