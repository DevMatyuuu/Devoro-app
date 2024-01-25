import React from 'react'
import { FaImage } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export default function Post() {
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-3 justify-center mt-24 h-56 border border-black/10 rounded-xl'>
             <textarea rows={Number('2')} cols={Number('70')} className='mt-5 h-36 resize-none rounded-xl bg-transparent px-7 py-3 focus: outline-none' contentEditable placeholder='Share your thoughts...'></textarea>
             <div className='px-7 mb-6 flex justify-between items-center'>
                <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger>
                        <label htmlFor='file'>
                            <FaImage size={32} className='text-purple-900 cursor-pointer' type='file'/>
                            <input type='file' id='file' className='xl:hidden'/>
                        </label>
                    </TooltipTrigger>
                    <TooltipContent className='bg-slate-800 text-white'>
                        <p>Media</p>
                    </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                <button className='rounded-md py-2 px-12 bg-violet-900 text-white hover:bg-violet-500'>Post</button>
             </div>
        </div>
    </div>
  )
}
