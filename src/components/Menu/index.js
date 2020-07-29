import React from 'react';
import Logo from "../../assets/image/LogoMain.png";
import './Menu.css';
import Button from '../Button';

// componente
function Menu (){
    return(
        <nav className="Menu">
            <a href= "/">
            <img class="Logo"src={Logo} alt= "AluraFlix logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;