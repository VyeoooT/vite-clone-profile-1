import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faArrowUpRightFromSquare, faBars, faBorderAll, faCircleHalfStroke, faDownload, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import imgPerson from './assets/person.png'
import { useEffect, useRef, useState } from "react"

function App() {
  // open menu mobile
  const [iconBar, setIconBar] = useState(faBars)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBackropBlur, setIsBackdropBlur] = useState(false)

  const menuRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    iconBar === faBars ? setIconBar(faXmark) : setIconBar(faBars)
    setIsMenuOpen(!isMenuOpen)
    setIsBackdropBlur(!isBackropBlur)
  }

  const closeMenu = () => {
    setIconBar(faBars);
    setIsMenuOpen(false);
    setIsBackdropBlur(false);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closeMenu()
    }
  }

  const MenuItemClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement

    if (target.tagName === "A") {
      closeMenu()
    }
  }

  // add - remove event click item menu
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    if (menuRef.current) {
      menuRef.current.addEventListener('click', MenuItemClick, true)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
      if (menuRef.current) {
        menuRef.current.removeEventListener('click', MenuItemClick, true)
      }
    }
  }, [])

  // event scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // add - remove event scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // dark mode theme
  const [isDarkMode, setIsDarkMode] = useState(false)

  // get state theme localstorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove("dark")
      setIsDarkMode(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", 'light')
    }
  }

  return (
    <>
      {/* header */}
      <header className={`fixed w-full py-4 lg:px-0 px-5 z-[999] duration-300 ${isScrolled ? "bg-white dark:text-white dark:bg-slate-800 shadow-lg dark:sm:bg-slate-900" : ""}`}>
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
          {/* logo fake */}
          <div className="flex items-center gap-4">
            <div className="size-10 bg-primary rounded-full text-xl text-white flex-center">R</div>
            <div>
              <h4 className="font-bold text-lg uppercase">Robin</h4>
              <p className="text-xs">Profile</p>
            </div>
          </div>

          {/* desktop - nav links */}
          <ul className="md:flex hidden gap-10 hover:*:text-primary *:duration-200">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            {/* drak theme */}
            <button className="theme-switch md:block hidden" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </button>
          </ul>

          {/* button - dark theme - menu bar */}
          <div className="flex items-center gap-6">
            {/* let's talk */}
            <a href="#contact">
              <button className="btn btn-outline md:!flex !hidden">
                <FontAwesomeIcon icon={faPaperPlane} />
                Let's Talk
              </button>
            </a>

            {/* drak theme */}
            <button className="theme-switch md:hidden" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </button>

            {/* menu bar */}
            <button ref={buttonRef} className="md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={iconBar} />
            </button>
          </div>
        </nav>
      </header>

      {/* backdrop blur */}
      <span className={`fixed h-screen bg-black/10 inset-0 backdrop-blur-sm z-[997] ${isBackropBlur ? "block" : "hidden"}`}></span>

      {/* mobile nav */}
      <ul ref={menuRef} className={`w-full ${isMenuOpen ? "h-96" : "h-0"} duration-300 flex-center flex-col gap-10 fixed bottom-0 left-0 z-[998] text-xl md:hidden text-white dark:bg-slate-800 bg-primary rounded-t-3xl overflow-hidden`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Home */}
      <section id="home" className="min-h-screen container grid place-items-center relative before:absolute before:top-0 before:bg-heroLight before:size-full before:start-1/2 before:transform before:-translate-x-1/2 before:bg-no-repeat before:-z-[1] before:dark:bg-heroDark">
        <div className="size-full pt-20 grid md:grid-cols-6 items-center justify-around max-w-6xl">
          <div className="lg:col-span-2 md:col-span-3 md:text-left text-center sm:pl-2">
            {/* info */}
            <div>
              <h5 className="font-medium text-gray-600 dark:text-gray-200">
                Hello Wellcome
              </h5>

              <h1 className="sm:text-5xl text-4xl font-medium !leading-normal dark:text-white relative">
                I'm <span className="text-primary">Robin</span>
                <br />
                Website Designer
              </h1>

              {/* button */}
              <button className="btn btn-filled mt-5">
                <FontAwesomeIcon icon={faEnvelope} />
                Hire Me
              </button>

              <button className="font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4">
                <FontAwesomeIcon className="mr-1" icon={faArrowUpRightFromSquare} />
                See Portfolio
              </button>
            </div>

            {/* desc */}
            <div className="md:w-96 md:ml-auto flex mt-9 gap-2">
              <FontAwesomeIcon className="mt-0.5 md:inline-block hidden" icon={faBorderAll} />
              <p className="max-w-md text-xs text-balance leading-5 px-2 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente accusamus. Aut similique magnam blanditiis quidem quia cumque impedit quis nisi, soluta autem totam iste nostrum iure officiis sapiente mollitia.
              </p>
            </div>

            {/* social */}
            <div className="flex items-center md:justify-end justify-center mt-9 gap-6 dark:text-gray-200 text-gray-600">
              <p>Follow Us</p>

              <div className="flex justify-end gap-3">
                <a className="social-icon" href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="social-icon" href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          </div>

          {/* image person */}
          <div className="lg:col-span-2 md:col-span-3">
            <img className="md:w-full max-w-96 md:mt-0 mt-5 w-2/3 mx-auto" src={imgPerson} alt="" />
          </div>

          {/* experience - project - cv */}
          <div className="lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none bg-gradient-to-l from-gray-100 dark:from-slate-800 lg:h-96 md:h-auto h-96 md:mt-0 mt-2">
            <ul className="text-2xl leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold">
              <li data-slot="count">12+</li>
              <li>Year of <span className="text-primary">Experience</span></li>
              <br />

              <li data-slot="count">8+</li>
              <li>Completed <span className="text-primary">Project</span></li>

              <li>
                <button className="btn btn-outline lg:mt-5 md:mt-0 mt-10">
                  <FontAwesomeIcon icon={faDownload} />
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="">

      </section>

      {/* Projects */}
      <section id="projects"></section>

      {/* Contact */}
      <section id="contact"></section>

      {/* Footer */}
      <footer></footer>

      <script type="module" src="/main.js"></script>
    </>
  )
}

export default App
