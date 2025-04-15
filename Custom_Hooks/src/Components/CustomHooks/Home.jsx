import { useBioContext } from "../CreateCustomHook/customHook";



const Home = () => {
  const { myFname, myMname, myLname, myAge } = useBioContext();
  return (
    <div>
      <h1>Hii Custom_Hook my Name is :{myFname}  {myMname} {myLname} and I am {myAge} years Old</h1>
    </div>
  )
}

export default Home