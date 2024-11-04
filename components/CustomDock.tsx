// components/DocLinks.tsx
import { FC } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const DocLinks: FC = () => {
  return (
    <div className="flex space-x-6 justify-center items-center p-4">
      <a
        href="mailto:your-email@gmail.com"
        className="text-gray-700 hover:text-blue-500"
        aria-label="Gmail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://github.com/your-github-username"
        className="text-gray-700 hover:text-blue-500"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin-username"
        className="text-gray-700 hover:text-blue-500"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default DocLinks;
