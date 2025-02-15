import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importando o Link do react-router-dom
import Checkbox from './CheckBox'; 
import '../index.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState); // Alternar o estado do menu
  };

  // Adicionar o listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      if (header) {
        header.classList.toggle('rolagem', window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpar o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="container">
        <div className="flex">
          {/* Logo ou ícone de navegação */}
          <Link to="/"><i className="bi bi-globe-americas"></i></Link>

          {/* Menu de navegação */}
          <div className={`nav ${menuActive ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/Information">Sobre mim</Link></li>
              <li><Link to="/Portifolio">Projetos</Link></li>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Network">Redes Sociais</Link></li>
              <li className="btn-contato"><Link to="/contato"><button>Contato</button></Link></li>
            </ul>
          </div>

          {/* Passando a função para controlar o menu */}
          <Checkbox menuActive={menuActive} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
