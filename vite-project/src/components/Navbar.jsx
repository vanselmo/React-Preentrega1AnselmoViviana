import CartWidget from "./CartWidget"

function Navbar() {
    return (
        <header className='border-b border-gray-800 flex items-center justify-between'>
            <nav>
                <div className="hidden md:flex md:gap-4">
                    <a href="#" className="text-green-800 font-bold hover:text-green-500">HOME</a>
                    <a href="#" className="text-green-800 font-bold hover:text-green-500">PRODUCTOS</a>
                    <a href="#" className="text-green-800 font-bold hover:text-green-500">CONTACTO</a>
                </div>
                <div className="md:hidden">
                    <img src="./img/menu-hamburguesa.png" alt="Menu Hamburguesa" />
                </div>
            </nav>


            <div className='justify-center'>
                <img src="./img/logo-viviendo-sano.png" alt="Logo Viviendo Sano" />
            </div>

            <div className="mr-4">
                <CartWidget />
            </div>
        </header>

    )
}

export default Navbar
