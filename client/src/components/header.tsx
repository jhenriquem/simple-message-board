import { useState } from "react"
import { FaMoon, FaGithub, FaSun } from "react-icons/fa"


function Header() {
  const [theme, setTheme] = useState<string>("dark")
  const toggleMode = () => {
    if (
      theme === "dark") {
      document.documentElement.classList.add("dark")
      setTheme("light")
    }
    else {
      document.documentElement.classList.remove("dark")
      setTheme("dark")
    }

  }
  return (
    <header className="w-full h-10 flex justify-between items-center dark:text-white">
      <button onClick={toggleMode} > {theme === "dark" ? <FaMoon /> : <FaSun />}</button>
      <p className="text-lg font-semibold">Messages</p>
      <a className="no-underline" href="https://github.com/jhenriquem/simple-message-board" target="_blank"><FaGithub /></a>
    </header>
  )
}

export default Header
