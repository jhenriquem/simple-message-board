import { FaMoon, FaGithub } from "react-icons/fa"


function Header() {
  return (
    <header className="w-full h-10 flex justify-between items-center">
      <button><FaMoon /></button>
      <p className="text-lg">Messages</p>
      <a className="no-underline" href="https://github.com/jhenriquem/simple-message-board" target="_blank"><FaGithub /></a>
    </header>
  )
}

export default Header
