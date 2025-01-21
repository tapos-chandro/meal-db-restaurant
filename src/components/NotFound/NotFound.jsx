import notFound2 from '../../assets/not.png'

const NotFound = ({ title }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={notFound2} alt='' className='lg:w-1/4' />
      <h1 className='text-4xl font-bold text-center text-gray-700 '>{title}</h1>
    </div>
  )
}

export default NotFound
