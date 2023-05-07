import logo from '../assets/header/header-logo.svg';
import basket from '../assets/basket.svg';

function Header() {
    const navLinks = [
        'Главная',
        'Меню',
        'Как дойти',
        'Условия',
    ]
    return (
    <div className="container mx-auto px-20 pt-3 flex flex-row justify-between items-center">
        <a className='flex flex-row justify-center items-center' href="https://yandex.ru/maps/-/CCUgVBBn0B"><img src={logo} alt="logo" /></a>
        <nav>
            <ul className='flex flex-row justify-center items-center last:mr-0 w-100'>
                {navLinks.map((link, index) => {
                    return <li className='flex flex-row justify-center items-center mr-10 w-[150px] last:mr-0' key={index}>
                                <a className='hover:bg-[#e0ae9579] hover:font-semibold p-[10px] rounded-[10px] text-[20px] text-[#6C4132]' href="#">{link}</a>
                           </li>
                })}
            </ul>
        </nav>
        <a href="#"><img src={basket} alt="basket" /></a>
    </div>
    )
}

export default Header
