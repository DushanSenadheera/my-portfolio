import { useState, useEffect } from 'react';
import { Navlinks } from "./Navlinks";
import cv from '../../assets/DushanSenadheeraCV.pdf'
import { IconMenuDeep } from '@tabler/icons-react';
import "./Navbar.scss";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

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

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'dark' : ''}`}>
        <div className='mobileNavContainer'>
        <h3 className="logo">&lt;Dushan_S&#47;&gt;</h3>
        <IconMenuDeep className='mobileNav' color='white' onClick={toggleNavbar} />
        </div>
        <div className={`navlinks ${toggle ? 'toggleNav' : ''}`}>
          <ul>
            {Navlinks.map((item, index) => {
              return <a onClick={toggleNavbar} href={item.path} key={index}>{item.name}</a>;
            })}
          </ul>
          <a href={cv} download><button className="primary-btn">Download CV</button></a>
        </div>
      </nav>
    </div>
  );
}
