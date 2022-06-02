import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div className='bg'>
      <div className='wrapper'>
        <img 
            src={spinner}
            style={{ width:'200px', margin:'auto', display:'block'}} alt='Loading...'
        />
        </div>
    </div>
  )
}

export default Spinner