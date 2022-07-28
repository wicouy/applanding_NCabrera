import Nav from "./Nav"

const Header = () => {
    return (
        <header id="header">
            <h1 className="titulo" >Titulo</h1>
            <img id="logo" src="/logo192.png"/>
            <Nav
                type="header"
            />
        </header>
    )
}

export default Header