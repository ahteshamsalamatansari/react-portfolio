import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef();
  const [activeLink, setActiveLink] = useState(null);

  const updateActiveBox = (element) => {
    if (activeBox.current && element) {
      activeBox.current.style.top = element.offsetTop + 'px';
      activeBox.current.style.left = element.offsetLeft + 'px';
      activeBox.current.style.width = element.offsetWidth + 'px';
      activeBox.current.style.height = element.offsetHeight + 'px';
    }
  };

  // Handle the initial active link on mount
  useEffect(() => {
    const initialActiveElement = document.querySelector(".nav-link.active");
    if (initialActiveElement) {
      setActiveLink(initialActiveElement); // Set initial active link
      updateActiveBox(initialActiveElement); // Update active box for the initial active link
    }

    // Update active box on resize
    const handleResize = () => {
      if (activeLink) {
        updateActiveBox(activeLink);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeLink]);

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink 
          to={link} 
          className={({ isActive }) => {
            if (isActive) {
              setActiveLink(document.querySelector(`a[href='${link}']`));
              return "nav-link active";
            }
            return "nav-link";
          }} 
          key={key}
        >
          {label}
        </NavLink>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
