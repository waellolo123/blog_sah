import {Button, Navbar, NavbarToggle, TextInput} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa";


const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="text-3xl font-bold text-red-700 whitespace-nowrap dark:text-white">
        B<span className="text-slate-500 dark:text-slate-300">loggers</span>
      </Link>
      <form >
        <TextInput type="text" placeholder="Search" rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" ><AiOutlineSearch /></Button>
        <Navbar.Collapse >
          <Navbar.Link active={path === "/"} >
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>  
        </Navbar.Collapse>
      <div className="flex items-center gap-3">
        <Button className="w-10 h-10 rounded-full text-red-700" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color="gray">Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>
    </Navbar>
  )
}

export default Header;