import { Link } from 'react-router-dom';
import why from '../../img/why.png';

export default function Navbar() {
    return (
        <nav className="bg-wl ">
            <div className="mx-auto p-4 px-6 bg-wl xl:px-28 xl:w-screen">
                <div className="mx-auto px-4 py-2 flex justify-between items-center">
                    <a href="/">
                        <img src={why} alt="logo" className='w-12' />
                    </a>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="text-wp hover:text-ws">
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-wp hover:text-ws">
                            About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-wp hover:text-ws">
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}