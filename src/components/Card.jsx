import React from 'react'
import { IoMdClose } from "react-icons/io";
import { motion} from "framer-motion";


import { FaFileAlt } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";

const Card = ({data}) => {
  return (
    <motion.div drag className=' flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden '>
<FaFileAlt />
<p  className='text-sm mt-5 font-semibold leading-tight'> {data.desc}</p>

<div className='footer absolute bottom-0  w-full left-0'>
<div  className='flex items-center justify-between py-3 px-8 mb-5'>
    <h5>{data.filesize}</h5>
   <span className='flex items-center rounded-full justify-center w-7 h-7 bg-zinc-600'>
    {data.close ? <IoMdClose /> : <IoCloudDownloadSharp size =".7em" color='#fff'/>}
     
     </span>
</div>
{
data.tag.isOpen && (
    <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4`}>
    <h3 className='flex items-center justify-center text-sm font-semibold'>{data.tag.tagTitle}</h3>
</div>
) 


}


    </div>
    </motion.div>
  );
}

export default Card