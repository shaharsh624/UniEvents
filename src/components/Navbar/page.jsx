// components/Navbar.jsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Link href="/">
                            UniEvents
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/events">Events</NavLink>
                        <NavLink href="/newEvent">New Event</NavLink>
                        <NavLink href="/organizations">Organizations</NavLink>
                        <NavLink href="/newOrganization">New Organization</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }) => {
    return (
        <Link href={href} className="text-white hover:text-gray-300">{children}
        </Link>
    );
};

export default Navbar;
