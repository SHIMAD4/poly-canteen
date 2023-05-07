import logo from '../assets/logo-footer.png';

function Footer() {
    return (
        <div className="container mx-auto px-20 flex flex-row justify-center items-center bg-[#E0AE95] py-[60px]">
            <a className='mr-[100px]' href="https://yandex.ru/maps/-/CCUgVBBn0B"><img className='w-[300px]' src={logo} alt="logo" /></a>
            <p className='text-[20px] text-white block w-[880px]'>Буфет использует файлы cookie. Продолжая работу с этим сайтом, вы подтверждаете использование сайтом cookies вашего браузера, которые помогают нам делать этот сайт удобнее для пользователей. Однако вы можете запретить сохранение файлов cookie в настройках своего браузера.</p>
        </div>
    )
}

export default Footer