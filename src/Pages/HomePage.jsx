import { Link } from "react-router-dom"
import "./styles/HomePage.css"
import { useState } from "react";


const HomePage = () => {

  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarModo = () => {
    setModoOscuro(!modoOscuro);

    const body = document.getElementById("body_page");
    if (body) {
      body.classList.toggle("dark");
    }
    const icon = document.getElementById("header_page");
    if (icon) {
      icon.classList.toggle("dark_icon");
    }
  };

  return (
    <div className="home_body" id="body_page">
  <header className="home_header" id="header_page">
    <nav className="home_nav">
      <ul className="home_list" >
        <li><Link to={"/"}><img className="icons" src="/icons/hogar.svg" alt="Home"></img></Link></li>
        <li><Link to={"/ProjectPage"}><img className="icons" src="/icons/maletin.svg" alt=""></img></Link></li>
        <li><Link to={"/UserInfoPage"}><img className="icons" src="/icons/usuario.svg" alt=""></img></Link></li>
      </ul>
    <div className="toggle_section">
    <img className="icon_screen" id="icon_page" src="/icons/sol-dark.svg" alt=""></img>
    <article className="wrap-toggle">
        <input onClick={cambiarModo} type="checkbox" id="toggle" className="offscreen" />
        <label htmlFor="toggle" className="switch"></label>
    </article>
    <img className="icon_screen" src="/icons/luna_dark.svg" alt=""></img>
    </div>
    </nav>      
  </header>
  <section>
    <section>
     
<article></article>
<article></article>

    </section>
  </section>
      
    </div>
  )
}

export default HomePage
