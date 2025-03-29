import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [total, updateTotal] = useState(1);

  // useEffect(() => {
  //   //first--> Side-Effect function
  //   first

  //   return () => {
  //     //second--> Cleanup function
  //     second
  //   }
  //   //thid-->Comma separated Dependency List
  // }, [third])


  //! Variation 1
  // //runs on every render
  // useEffect(() => {
  //   alert("I will alert on every Render")
  //   //hr render pr chl rha hota hai and render hone k just phle execute hota hai
  // })


  //! Variation 2:
  // runs of Only First Render
  // useEffect(() => {

  //   alert("I will run on only first Render")

  // }, [])


  // //! Variation 3:
  //   // runs on every Update Before Render
  // useEffect(() => {
  //  alert("Will Run on Evrytime When counter Update")
  // }, [count])


  // //! Variation 4:
  // // Multiple Dependency
  // useEffect(() => {

  //   alert("I will run  on Every Time When count/total is updated")

  // }, [count, total])


//! Variation 5:
//CleanUp FUnction

useEffect(() => {
  alert("nya Component add hua")

  return () => {
    alert("Purana wala hat gya")
  }
}, [count,total])










  function handleCount() {
    setCount(count + 1);

  };
  function updateTotalCount() {
    updateTotal(total + 1);

  }

  return (
    <div>
      <button onClick={handleCount}>Click me</button>
      <br />
      <p>Count: {count}</p>
      <br />
      <button onClick={updateTotalCount}>Update total</button>
      <br />
      <p>Total: {total}</p>
    </div>
  )
}

export default App
