import { useState, useEffect } from 'react';
import { Navlinks } from "./Navlinks";
import "./Navbar.scss";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'dark' : ''}`}>
        <h3 className="logo">Dushan Senadheera</h3>
        <div className="navlinks">
          <ul>
            {Navlinks.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
          <button className="primary-btn">Download CV</button>
        </div>
      </nav>
    </div>
  );
}
