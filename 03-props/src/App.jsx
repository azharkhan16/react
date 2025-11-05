import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'> 
  
    <Card user='Azhar Khan' age={24} img='https://images.unsplash.com/photo-1641677317132-045e9e367d5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1965'/>
    <Card user='Aditya kumar' age={22} img='https://plus.unsplash.com/premium_photo-1731167468076-7e4cdb16941d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600'/>
    <Card user='Manav ' age={24} img='https://plus.unsplash.com/premium_photo-1761952919697-6caf69da9aac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'/>

    </div>
  )
}

export default App
