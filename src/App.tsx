import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faObjectUngroup, faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faArrowUp, faArrowUpRightFromSquare, faBars, faBorderAll, faCircleHalfStroke, faDownload, faLocationDot, faPenNib, faPhone, faUsers, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import imgPerson from './assets/person.png'
import imgProject1 from './assets/pro1.jpg'
import imgProject2 from './assets/pro2.jpg'
import imgProject3 from './assets/pro3.jpg'
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
              <a href="#projects">Projects</a>
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
      <section id="about" className="container min-h-screen flex-center">
        <div>
          <div className="text-center text-balance">
            <h3>What I Know</h3>
            <p className="mt-3 px-2 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi at fugiat cupiditate molestiae fugit dolor, odit velit voluptatum dolorem suscipit itaque tempora deleniti, nesciunt veritatis veniam ullam! Obcaecati, repellat eius.
            </p>
          </div>

          {/* skill */}
          <div className="max-w-2xl grid md:grid-cols-1 sm:grid-cols-3 gap-6 px-2 mt-10 mx-auto *:text-lg *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12 *:rounded-xl *:sm:max-w-full *:max-w-sm *:mx-auto *:sm:text-left *:text-center hover:*:brightness-90 *:shadow-sm *:cursor-pointer">
            {/* Website Design */}
            <div>
              {/* header */}
              <div className="*:text-primary">
                <FontAwesomeIcon icon={faObjectUngroup} />

                <h6 className="font-semibold whitespace-nowrap mt-3">Website Design</h6>
              </div>

              {/* description */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero alias eum illum tempora dicta quis animi aut esse. Aut exercitationem, qui optio repellat libero aspernatur! Necessitatibus molestiae dolorem vel.
                </p>
              </div>

              {/* icon more */}
              <button className="rotate-45 text-primary">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>

            {/* UI/UX Design */}
            <div>
              {/* header */}
              <div className="*:text-primary">
                <FontAwesomeIcon icon={faPenNib} />

                <h6 className="font-semibold whitespace-nowrap mt-3">UI/UX Design</h6>
              </div>

              {/* description */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero alias eum illum tempora dicta quis animi aut esse. Aut exercitationem, qui optio repellat libero aspernatur! Necessitatibus molestiae dolorem vel.
                </p>
              </div>

              {/* icon more */}
              <button className="rotate-45 text-primary">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>

            {/* Teams Play */}
            <div>
              {/* header */}
              <div className="*:text-primary">
                <FontAwesomeIcon icon={faUsers} />

                <h6 className="font-semibold whitespace-nowrap mt-3">Teams Play</h6>
              </div>

              {/* description */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero alias eum illum tempora dicta quis animi aut esse. Aut exercitationem, qui optio repellat libero aspernatur! Necessitatibus molestiae dolorem vel.
                </p>
              </div>

              {/* icon more */}
              <button className="rotate-45 text-primary">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container min-h-screen flex-center">
        <div className="text-center text-balance">
          <h3>My Projects</h3>

          <p className="px-2 mt-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dignissimos veniam odit pariatur dicta mollitia ab fuga minima fugiat nesciunt blanditiis reiciendis quo nobis enim ipsam, quia hic iusto! Sit!
          </p>
          <br />

          {/* tag button */}
          <div className="flex-center gap-4">
            <button className="btn btn-filled">Website</button>
            <button className="btn btn-outline">Mobile App</button>
            <button className="btn btn-outline">Figma</button>
          </div>
          <br />

          {/* img */}
          <div className="*:size-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer mx-auto max-w-4xl grid md:grid-rows-2 md:grid-cols-2 md:px-0 px-10 *:hover:grayscale hover:*:grayscale-0 *:duration-1000">
            <img src={imgProject1} alt="" />
            <img className="row-span-2" src={imgProject3} alt="" />
            <img src={imgProject2} alt="" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container relative max-w-4xl mx-auto min-h-screen flex-center px-5">
        <div className="pb-10">
          {/* header */}
          <div className="text-center">
            <h3>Contact Me</h3>

            <p className="px-3 mt-3 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, recusandae quibusdam cupiditate porro eveniet quae enim nesciunt voluptates nisi fuga temporibus harum illo eum magnam tempora fugit vero ex iste?
            </p>
          </div>

          {/* info contact */}
          <div className="mt-12 md:relative flex flex-col gap-5 sm:max-w-full max-w-xs mx-auto">
            {/* form */}
            <div className="dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 w-full py-14 px-4">
              <h3 className="font-semibold text-3xl">
                Send Us A
                <br />

                <span className="text-primary">Message</span>
              </h3>

              <form className="*:flex *:flex-col *:gap-1 mt-5 md:w-2/3 w-full">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Enter your message" />
                </div>

                <button className="btn btn-filled ml-auto">Send To Us</button>
              </form>
            </div>

            {/* drop in our */}
            <div className="dark:bg-gray-700 bg-white py-12 px-7 md:absolute lg:-right-9 right-28 rounded-xl shadow-xl md:w-2/5 h-5/6 top-28 w-full mx-auto">
              {/* header */}
              <h3 className="font-semibold text-2xl border-b pb-4 border-gray-600">
                Drop In Our
                <br />

                Office <span className="text-primary">.</span>
              </h3>

              <div className="py-4">
                {/* desc info */}
                <p className="text-xs text-gray-400 leading-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sit asperiores dignissimos numquam necessitatibus nobis inventore.
                </p>

                {/* address */}
                <ul className="*:flex *:items-center *:gap-4 *:mt-4">
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} />

                    <div>
                      <h2>Ho Chi Mini City</h2>
                      <address>13P John doe Street,Us</address>
                    </div>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>codeaprogram@gmail.com</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+123 456 7890</p>
                  </li>
                </ul>

                {/* follow us */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-slate-700 bg-slate-100 text-center py-2">
        Copyright &copy; 2024

        <ul className="flex-center gap-5 py-4 text-sm">
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
      </footer>

      <script type="module" src="/main.js"></script>
    </>
  )
}

export default App
