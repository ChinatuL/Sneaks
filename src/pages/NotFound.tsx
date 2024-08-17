import icon404 from "@icons/not-found.svg";

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen max-w-[1240px] mx-auto w-full px-4 lg:px-8 2xl:px-0'>
            <div className='flex flex-col items-center'>
                <img src={icon404} alt='Page not found' className='w-max' />
                <p className='lg:text-2xl'>
                    Sorry, the page you are looking for does not exist
                </p>
            </div>
        </div>
    );
};
export default NotFound;
