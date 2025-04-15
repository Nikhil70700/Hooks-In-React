import { useBioContext } from "../CreateCustomHook/customHook";



const Services = () => {
  const { myFname, myMname, myLname, myAge } = useBioContext()
  return (
    <div>
      <h1>Hii Custom_Hook (Services) my Name is :{myFname}  {myMname} {myLname} and I am {myAge} years Old</h1>
    </div>
  )
}

export default Services;