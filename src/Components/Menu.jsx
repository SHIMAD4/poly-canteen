import searchIcon from '../assets/menu/search-icon.svg';
import MenuItem from './MenuItem'

function Menu() {
    const categories = [
        'Популярное',
        'Выпечка',
        'Сладкое и снеки',
        'Напитки',
        'Готовая еда',
    ]

    return (
        <div className="bg-[#FFF0E9] h-screen m-[-12px]">
            <div className="menu container mx-auto px-20 grid">
                <h1 className="mt-[48px] text-[40px] text-[#5C372B] font-semibold">Меню</h1>
                <div className="search justify-self-end absolute">
                    <img className='relative top-[55px] left-[10px] cursor-pointer' src={searchIcon} alt="search" />
                    <input className="w-[340px] h-[60px] rounded-[10px] pl-[70px] pr-[20px] placeholder:text-[#E0AE95] placeholder:text-[24px]" type="text" placeholder="Поиск..."/>
                </div>
                <ul className='mt-[40px]'>
                    {categories.map((category, index) => {
                        return <li className='text-center py-[20px] mb-[35px] cursor-pointer border-[1px] border-[#E0AE95] border-solid rounded-[10px]
                                            hover:bg-white hover:shadow-xl active:bg-[#ffffff86] active:shadow-none last:mb-[0px]' key={index}>
                                    <a className='text-[20px] text-[#5C372B] font-semibold' href="#">{category}</a>
                                </li>
                    })}
                </ul>
                <div className="menu-item w-full h-[410px] flex flex-row justify-between items-center px-[70px] place-self-center">
                    <MenuItem name="Сендвич" price="190" weight="90"/>
                    <MenuItem name="Сендвич" price="190" weight="90"/>
                    <MenuItem name="Сендвич" price="190" weight="90"/>
                </div>
                <a className='button w-fit h-fit px-[15px] py-[10px] bg-[#6C4132] rounded-[10px] 
                              text-[20px] text-white font-semibold
                              justify-self-center place-self-center' href="#">Посмотреть все</a>
            </div>
        </div>
    )
}

export default Menu