import axios from 'axios'

const getData = async() => {
  try {
    const {data} = await axios('https://app.ftoyd.com/fronttemp-service/fronttemp');
    return data
  } catch (e) {
    console.error(e.message)
    throw new Error(e.message)
  }
}

function App() {


  return (
    <>
      <div>Hello, world</div>
    </>
  )
}

export default App
