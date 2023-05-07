import icon1 from '../assets/about/icon-1.svg';
import icon2 from '../assets/about/icon-2.svg';
import icon3 from '../assets/about/icon-3.svg';
import videoPreview from '../assets/about/video-preview.png';

function About() {
    return (
        <>
            <div className="container mx-auto px-20 mt-24 flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center">
                    <img className='mr-[30px]' src={icon1} alt="" />
                    <p className='text-[20px] font-semibold'>Бери, что по душе</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <img className='mr-[30px]' src={icon2} alt="" />
                    <p className='text-[20px] font-semibold block w-[310px]'>Выбираешь, удобное время для получения</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <img className='mr-[30px]' src={icon3} alt="" />
                    <p className='text-[20px] font-semibold'>Наслаждаешься едой</p>
                </div>
            </div>
            <div className="container mx-auto px-20 mt-[60px] mb-[100px]">
                <p className='text-[14px] text-[#E0AE95]'>Заказ нужно забрать  в течение  выбранного времени. В случае, не забранного заказа, на следующий день заказ анулируется и деньги не возвращаются.</p>
                <p className='text-[14px] text-[#E0AE95]'>* внешний вид блюда может отличаться от изображения на картинке</p>
            </div>
            <h2 className='container mx-auto px-20 mb-[70px] text-[40px] text-[#5C372B] font-semibold'>Как найти нас?</h2>
            <img className="container mx-auto px-20 flex flex-col justify-center items-center mb-[70px] w-[1200px]" src={videoPreview} alt="video preview" />
        </>
    )
}

export default About