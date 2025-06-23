const Footer = ()=>{
    return (<footer className="bg-dark text-light py-4">
            <div className="container-fluid text-center">
                <p className="mb-1">© {new Date().getFullYear()} MiSitio. Todos los derechos reservados.</p>
                <div>
                    <a href="#" className="text-light me-3">Privacidad</a>
                    <a href="#" className="text-light me-3">Términos</a>
                    <a href="#" className="text-light">Contacto</a>
                </div>
            </div>
        </footer>)

}

export default Footer;