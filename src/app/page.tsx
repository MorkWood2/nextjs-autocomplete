'use client'
import Autocomplete from './components/Autocomplete'
// import { useState, useEffect } from "react"

export default function Home() {

//   const [data, setData] = useState([])


//   useEffect(() => {
// const getData = async () => {
//   const query = await fetch('https://jsonplaceholder.typicode.com/users')
//   const response = await query.json()
//   console.log(response);

//   setData(response)
// }
// getData()   
//   }, [])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <Autocomplete />
      </div>


      {/* <div>
        {
          data && data.length && data.map((user:any, index: any) => {
            console.log(index);
            return (
              <div key={user.id}>
                {user.name}
              </div>
            )
            
          })
        }

      </div> */}

      
 

    </main>
  )
}
