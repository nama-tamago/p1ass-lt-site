import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Header: React.FC = () => (
  <header className="absolute top-0 text-white w-full h-12 lg:h-16 lg:px-4 pointer-events-none">
    <nav className="flex px-2 lg:px-4 h-full max-w-screen-xl mx-auto items-center justify-between">
      <ExternalLink className="pointer-events-auto" href="https://connpass.com/event/193445/">
        <h1 className="font-extrabold text-2xl lg:text-3xl font-sans">p1ass LT</h1>
      </ExternalLink>
      <ul className="flex items-center mt-8">
        <li className="mx-2">
          <ExternalLink className="mr-1 pointer-events-auto" href="https://github.com/nama-tamago/p1ass-lt-site">
            <i>
              <FaGithub fontSize="48" />
            </i>
          </ExternalLink>
        </li>
      </ul>
    </nav>
  </header>
);
