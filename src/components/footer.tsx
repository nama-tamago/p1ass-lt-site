import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer
    className="absolute text-white bottom-0 p-3 pb-6 lg:pb-2 text-sm lg:text-base
    flex flex-col items-center justify-center w-full h-16 sm:h-20 text-center  pointer-events-none"
  >
    <div className="flex items-center leading-relaxed py-1 lg:py-0">
      ©2020
      <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://twitter.com/placeholder">
        placeholder
      </ExternalLink>
      <ExternalLink className="underline hover:opacity-50 mr-1 pointer-events-auto" href="https://github.com/placeholder">
        <i>
          <FaGithub fontSize="18" />
        </i>
      </ExternalLink>
      built with
      <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://nextjs.org/">
        Next.js
      </ExternalLink>
      and
      <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://github.com/pmndrs/react-three-fiber">
        react-three-fiber
      </ExternalLink>
    </div>
  </footer>
);
