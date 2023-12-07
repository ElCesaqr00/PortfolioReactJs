import "./styles/ProjectPage.css"
import { Link } from "react-router-dom"


const ProjectPage = () => {
  return (
    <>
  <header className="home_header">
    <nav>
    <ul className="home_nav">
        <li><Link to={"/"}><img className="icons" src="/public/icons/hogar.svg" alt="Home"></img></Link></li>
        <li><Link to={"/ProjectPage"}><img className="icons" src="/public/icons/maletin.svg" alt=""></img></Link></li>
        <li><Link to={"/UserInfoPage"}><img className="icons" src="/public/icons/usuario.svg" alt=""></img></Link></li>
      </ul>
    </nav>
  </header>
  <section>
    <section>
<article></article>
<article></article>

    </section>
  </section>
      
    </>
  )
}

export default ProjectPage
