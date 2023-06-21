import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="flex items-center justify-center border bg-transparent text-white p-4 sm:p-6 space-x-4 rounded-xl max-w-6xl mx-4 sm:mx-auto mb-8">
      <div className="flex space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white transition-transform hover:scale-110" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white transition-transform hover:scale-110" size={30} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white transition-transform hover:scale-110" size={30} />
        </a>
      </div>
      <div className="text-sm">MyPortfolio
        &copy; {currentYear} Tous droits réservés
      </div>
    </footer>
  )
}

