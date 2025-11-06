import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
      console.log('increasing')
     setNum(num+1)
  }

  function decreaseNum() {
    console.log('decreasing')
     setNum(num-1)
  }

    function jump5Num() {
    console.log('jump by 5')
     setNum(num+5)
  }

  return (
    <div>
         <h1>{num}</h1>
         <button onClick={increaseNum}>increase</button>
         <button onClick={decreaseNum}>decrease</button>
         <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default App





















// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState('Azhar')
//   const [users, setUsers] = useState([10,20,30])

//   function changeNum() {
//     setNum(20)
//     setUsername('Aditya')
//     setUsers([40,50,60])

//   }

//   return (
//     <div>
//         <h1>Value of num is {num} <br /> {users} <br /> value of user is {username}</h1>
//         <button onClick={changeNum}>Click</button> 
//     </div>
//   )
// }

// export default App
