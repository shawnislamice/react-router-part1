import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === false ? (
          <IoMdMenu className="text-3xl " />
        ) : (
          <IoIosCloseCircleOutline className="text-3xl"></IoIosCloseCircleOutline>
        )}
      </div>

      <ul
        className={`list-none md:flex items-center space-x-6 font-semibold md:static absolute bg-red-600 px-6 ${open? 'top-12' :'-top-60'} duration-1000`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
