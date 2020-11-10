import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer
    className="absolute text-white bottom-0 p-1 pb-2 text-sm lg:text-base
    flex flex-col items-center justify-center w-full h-24 text-center  pointer-events-none"
  >
    <div className="flex flex-col sm:flex-row items-center leading-relaxed py-1 lg:py-0">
      <div className="flex">
        ©2020
        <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://twitter.com/p1ass">
          p1ass
        </ExternalLink>
        <ExternalLink className="underline hover:opacity-50 mr-1 pt-1 pointer-events-auto" href="https://github.com/nama-tamago">
          <i>
            <FaGithub fontSize="16" />
          </i>
        </ExternalLink>
      </div>
      <div>
        built with
        <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://nextjs.org/">
          Next.js
        </ExternalLink>
        and
        <ExternalLink className="underline hover:opacity-50 mx-1 pointer-events-auto" href="https://github.com/pmndrs/react-three-fiber">
          react-three-fiber
        </ExternalLink>
      </div>
    </div>
  </footer>
);
