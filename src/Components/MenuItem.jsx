/* eslint-disable react/prop-types */
import addToBasket from '../assets/menu/add-to-basket-icon.svg';

function MenuItem({name, price, weight, img, key}) {
    return (
        <div className="w-[270px] h-full bg-white rounded-[20px] flex flex-col justify-end items-center text-center" key={key}>
            <img className='mb-[50px]' src={img} alt="item image" width={240} />
            <h2 className='mb-[50px] text-[20px] text-[#5C372B] font-semibold'>{name}</h2>
            <div className="w-full flex justify-between mb-[20px] px-[35px]">
                <p className='text-[20px] text-[#5C372B] font-semibold'>{price} руб.</p>
                <p className='text-[20px] text-[#5C372B]'>{weight} г.</p>
            </div>
            <div className='mb-[25px] p-2 shadow-2xl rounded-[10px] cursor-pointer'>
                <img width={35} src={addToBasket} alt="add to basket" />
            </div>
        </div>
    )
}

export default MenuItem