import { Link } from "react-router-dom";
import heroImg from "@images/hero.png";
const Home = () => {
    return (
        <div className='flex pt-8 justify-between items-center lg:h-[calc(100vh-114px)] lg:pt-0'>
            <div className='flex flex-col gap-4 lg:block md:w-[60%] xl:w-[58%]'>
                <h1 className='font-merriweather font-bold text-4xl leading-[60px] xl:text-[64px] xl:leading-[80px]'>
                    Elevate your Style, Lace Up and Level Up.
                </h1>
                <p className='pt-4 pb-8 font-light text-xl leading-8 tracking-[1%] 2xl:pt-6 2xl:pb-12'>
                    Step into style and comfort with our collection of shoes
                    curated for you. We've got your feet covered with our
                    diverse selection of footwear, designed to keep you looking
                    great all day long.
                </p>
                <Link to='/products' className='md:w-max'>
                    <div className='grid place-items-center h-16 px-8 text-2xl rounded-[10px] bg-darkYellow text-white uppercase transition-ease hover:opacity-80 md:w-max 2xl:h-[86px] 2xl:text-[32px] font-bold'>
                        shop now
                    </div>
                </Link>
            </div>
            <div className='hidden md:block w-[40%] xl:w-[42%]'>
                <img src={heroImg} alt='' />
            </div>
        </div>
    );
};
export default Home;
