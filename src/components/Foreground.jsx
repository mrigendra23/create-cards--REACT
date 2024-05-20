import React from 'react'
import Card from './Card'
const Foreground = () => {
  // const ref = useRef(null);


  const data =[
    {
    desc: "Lorem ipsum dolor ",
    filesize :"0.9mb",
    close:"true",
    tag:{isOpen :true ,tagTitle:"download now" ,tagColor :"green"}

  },
  {
    desc: "hello guyssss ",
    filesize :"0.9mb",
    close:"true",
    tag:{isOpen :false ,tagTitle:"download now" , tagColor :"blue"}

  }, {
    desc: "learn react ",
    filesize :"0.9mb",
    close:"true",
    tag:{isOpen :true ,tagTitle:"download now" ,tagColor :"blue"}

  }
  ];

  return (

    
    <div  className="w-full h-full fixed top-0 left-0 flex gap-10 flex-wrap p-5"> 
      {data.map((item,index) => (
       
        <Card data ={item}  key={index}/>
      ))}

     </div>
     
  )
}

export default Foreground