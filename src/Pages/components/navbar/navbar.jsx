import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Flowbite from "flowbite-react"
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
const NavbarTest = () => {
    const [stickyClass, setStickyClass] = useState('sm:bg-transparent absolute');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 right-0  bg-white shadow-md') : setStickyClass('sm:bg-transparent absolute');
    }
  };

    return (
        <div>
            <Navbar className={` w-full z-50  py-5 px-8 ${stickyClass}`}
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
  <img
                        src={require('../../Assets/TrouvaillerGreen .png')}
                        className="mr-3 h-6 sm:h-9 pl-10"
                        alt="Trouvailler Logo"
                    />
   
  </Navbar.Brand>
  <div className="flex md:order-2">
  <div>
                        <input type="text" className="w-full sm:w-20 bg-whiteglow outline-none text-blacky-dark text-sm border border-graydust-normal duration-500 px-4 py-2 rounded-md" placeholder="Search" />
                    </div>
                    <Link className="" to="/login">
                        <Button
                            class="w-full sm:w-auto  bg-whiteglow text-blacky-dark text-sm border border-none shadow-lg shadow-gray-200 duration-500 px-4  hover:bg-blacky-dark rounded-md hover:text-whiteglow">
                            Login
                        </Button>
                    </Link>
                    <Link className="" to="/signup">
                        <Button
                            class="w-full sm:w-auto bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4  hover:bg-blacky-dark rounded-md hover:text-whiteglow">
                            Signup
                        </Button>
                    </Link>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
  <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm text-blacky-light hover:text-evergreen duration-500">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/bid-status"
                        class="p-3 sm:p-0 text-sm text-blacky-light hover:text-evergreen duration-500">
                        My bids
                    </Navbar.Link>
                    <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm  text-blacky-light hover:text-evergreen duration-500">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm  text-blacky-light hover:text-evergreen duration-500 ">
                        Contact
                    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
            {/* <Navbar
                fluid={true}
                rounded={true}
                class="bg-whiteglow sm:bg-transparent py-10 px-12"
            >
                <Navbar.Brand href="/">
                    <img
                        src={require('../../Assets/TrouvaillerGreen .png')}
                        className="mr-3 h-6 sm:h-9 pl-10"
                        alt="Trouvailler Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm text-blacky-light hover:text-evergreen duration-500">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/bid-status"
                        class="p-3 sm:p-0 text-sm text-blacky-light hover:text-evergreen duration-500">
                        My bids
                    </Navbar.Link>
                    <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm  text-blacky-light hover:text-evergreen duration-500">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/"
                        class="p-3 sm:p-0 text-sm  text-blacky-light hover:text-evergreen duration-500 ">
                        Contact
                    </Navbar.Link>
                    <div>
                        <input type="text" className="w-full sm:w-20 bg-whiteglow outline-none text-blacky-dark text-sm border border-graydust-normal duration-500 px-4 py-2 rounded-md" placeholder="Search" />
                    </div>
                    <Link className="" to="/login">
                        <Button
                            class="w-full sm:w-auto  bg-whiteglow text-blacky-dark text-sm border border-none shadow-lg shadow-gray-200 duration-500 px-4  hover:bg-blacky-dark rounded-md hover:text-whiteglow">
                            Login
                        </Button>
                    </Link>
                    <Link className="" to="/signup">
                        <Button
                            class="w-full sm:w-auto bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4  hover:bg-blacky-dark rounded-md hover:text-whiteglow">
                            Signup
                        </Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar> */}
        </div>
    );
}

export default NavbarTest;
