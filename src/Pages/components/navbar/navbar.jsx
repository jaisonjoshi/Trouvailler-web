import React from 'react';
import { Link } from "react-router-dom";
import Flowbite from "flowbite-react"
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
const NavbarTest = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                class="bg-whiteglow sm:bg-transparent py-6 px-3"
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
            </Navbar>
        </div>
    );
}

export default NavbarTest;
