import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="p-6 w-full border-t md:flex md:items-center md:justify-between md:p-12">
                <span className="text-sm text-gray-400 sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex items-center mt-3 text-sm text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;