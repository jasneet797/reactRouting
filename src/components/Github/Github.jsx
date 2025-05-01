import React from 'react'

function Github() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/jasneet797")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text=3xl p-4'>Github followers:{data.followers}</div>
  )
}

export default Github