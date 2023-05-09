import background from '../assets/hero/hero-bg.png';

function Hero () {
    return (
        <div className="container mx-auto px-20 h-screen flex flex-col justify-center">
            <img className='absolute top-[-70px] left-[65px] z-[-1] w-[100%]' src={background} alt="hero background" />
            <div className="mt-[-120px]">
                <h1 className="text-[#5C372B] text-[40px] font-semibold mb-[10px]">Заказывайте заранее</h1>
                <p className="text-[#6C4132] text-[32px] mb-[40px]">Забирайте в удобное время</p>
                <a className="text-white text-[32px] px-[65px] py-[10px] bg-[#E0AE95] rounded-[20px] hover:bg-[#c29781] active:bg-[#a57f6d]" href="#">Оформить</a>
            </div>
        </div>
    )
}

export default Hero