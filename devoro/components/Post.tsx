'use client'

import React, {useRef} from 'react'
import { FaImage } from "react-icons/fa";
import { IoLocationSharp, IoClose } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import usePostStore from '@/store/postStore';
import Lottie from 'lottie-react'
import loader from '@/assets/loading.json'


  

export default function Post() {
  const { input, setInput, media, setMedia, emoji, setEmoji, sendPost, loading} = usePostStore();

  const filePickerRef = useRef<any>();

  const addEmojiToTextAreaField = (e: any) => {
    let sym = e.unified.split("-");
    let codesArray: number[] = [];
    sym.forEach((el: string) => codesArray.push(parseInt("0x" + el)));
    let emojis = String.fromCodePoint(...codesArray);
    setInput(input + emojis)
  }

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent: any) => {
      setMedia(readerEvent.target.result);
    }
  }

  const handlePostClick = () => {
    sendPost();
  };
  


  return (
    <div className='w-full'>
        <div className='flex flex-col gap-3 justify-center h-auto mt-24 border border-black/10 rounded-xl'>
            <div className='flex flex-col px-7 '>
             <textarea rows={Number('2')} cols={Number('70')} value={input} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)} className='mt-5 h-36 w-full resize-none rounded-xl bg-transparent py-3 focus: outline-none' contentEditable placeholder='Share your thoughts...'></textarea>
             {media && (
                  <div className='relative'>
                  <div onClick={() => setMedia(null)} className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-[280px] cursor pointer'>
                    <IoClose className='text-white h-5 cursor-pointer'/>
                  </div>
                  <img src={media} alt='' className='rounded-xl max-h-80 object-contain w-80'/>
                </div>
                )}
            </div>
             <div className='px-7 mb-3 flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger>
                        <div onClick={() => filePickerRef.current.click()}>
                            <FaImage size={24} className='text-black/50 cursor-pointer'/>
                            <input ref={filePickerRef} onChange={addImageToPost} type='file' id='file' hidden />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className='bg-slate-800 text-white'>
                        <p>Media</p>
                    </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger>
                        <IoLocationSharp size={24} className='text-black/50 cursor-pointer'/>
                    </TooltipTrigger>
                    <TooltipContent className='bg-slate-800 text-white'>
                        <p>Location</p>
                    </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger>
                        <div onClick={() => setEmoji(!emoji)}>
                          <MdEmojiEmotions size={24} className='text-black/50 cursor-pointer'/>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className='bg-slate-800 text-white'>
                        <p>Emojis</p>
                    </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                 <Tooltip>
                    <TooltipTrigger>
                        <FaCalendarAlt size={20} className='text-black/50 cursor-pointer'/>
                    </TooltipTrigger>
                    <TooltipContent className='bg-slate-800 text-white'>
                        <p>Calendar</p>
                    </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
                </div>
                <div className='absolute mt-[480px]'>
                  {emoji && (
                    <Picker 
                      data={data}
                      onEmojiSelect={addEmojiToTextAreaField}
                      theme='dark'
                      />
                  )}
                </div>
                <div className='flex items-center gap-5'>
                {loading ? (
                  <Lottie animationData={loader} className='h-10 w-10' />
                  ) : (
                  ''
                  )}
                  <button onClick={handlePostClick} className={`${!input.trim() && !media ? '' : 'hover:bg-purple-500' } rounded-md py-2 px-12 bg-purple-900 text-white disabled:opacity-50 disabled:cursor-not-allowed`} disabled={!input.trim() && !media}>Post</button>
                </div>
             </div>
        </div>
    </div>
  )
}
