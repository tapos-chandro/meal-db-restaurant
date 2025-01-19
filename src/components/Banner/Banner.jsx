const Banner = () => {
  return (
    <div className='bg-center bg-no-repeat bg-cover bg-banner-bg'>
      <div className=' bg-[#00000091] py-52'>
        <div className='container flex flex-col items-center justify-center gap-6 mx-auto text-center' >
          <h1 className='text-4xl font-bold text-white lg:text-6xl'>
            Taste Our Delicious <br /> Best food
          </h1>
          <p className="text-gray-300">Looking for something specific? Use our search tool to find what you need in just a few clicks. <br/>We're here to help you explore our platform effortlessly.</p>
          <div className='flex justify-center w-full join'>
            <input
              type='text'
              placeholder='Search input'
              className='lg:w-1/3 input input-bordered join-item'
            />
            <button className='font-bold bg-yellow-500 border-none btn join-item'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
