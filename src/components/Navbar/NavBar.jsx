import "./navBar.css";

function NavBar() {
    return (
        <nav className="ContenedorNav">
            <ul className="MenuNav">
                <li>
                    <a href="#datosinicio">Inicio</a>
                </li>
                <li>
                    <a href="#datosProductos">Productos</a>
                </li>
                <li>
                    <a href="#datosNosotros">Nosotros</a>
                </li>
                <li>
                    <a href="#datosContacto">Contacto</a>
                </li>
                <li>
                    <a href="#datosUbicación">Ubicación</a>
                </li>

                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}
export default NavBar;