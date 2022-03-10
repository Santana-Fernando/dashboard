import './Navbar.css'

const avatar = "https://static.thenounproject.com/png/2734299-200.png"

const Navbar = ({ openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar_right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                
                <a href="#">
                    <img src={avatar} alt="avatar" width="30" />
                </a>

            </div>
        </nav>
    )
}

export default Navbar;