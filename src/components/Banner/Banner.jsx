import { useContext } from "react"
import { SearchContext } from "../../SearchProvider/SearchProvider"


const Banner = () => {

  const {setSearch } = useContext(SearchContext)

  const handleChange = (e) => {
    e.preventDefault()

    setSearch(e.target.search.value)

  }


  return (
    <div className='bg-center bg-no-repeat bg-cover bg-banner-bg'>
      <div className=' bg-[#00000091] lg:py-44 py-32'>
        <div className='container flex flex-col items-center justify-center gap-6 px-5 mx-auto text-center' >
          <h1 className='text-4xl font-bold text-white lg:text-6xl'>
            Taste Our Delicious <br /> Best food
          </h1>
          <p className="text-gray-300">Looking for something specific? Use our search tool to find what you need in just a few clicks. <br/>We're here to help you explore our platform effortlessly.</p>
         
            <form onSubmit={handleChange}  className='flex justify-center w-full join'>
            <input
              type='text'
              placeholder='Search input'
              className='lg:w-1/3 input input-bordered join-item'
              name="search"
            />
            <button  className='font-bold bg-yellow-500 border-none btn join-item'>Search</button>
            </form>
        
        </div>
      </div>
    </div>
  )
}

export default Banner
