'use client'

import Image from 'next/image'
import React from 'react'
import banner from '@/assets/loginBanner.jpg'
import logo from '@/public/Devoro-logo-mobile.png'
import { useFormik, FormikProps } from 'formik'
import Link from 'next/link'
import { SignUpSchema } from '../validations/Validation'
import { RiErrorWarningFill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface SignupValues {
    username: string;
    email: string;
    password: string;
    cpassword: string;
  }

const initialValues = {
  username: '',
  email: '',
  password: '',
  cpassword: '',
}


export default function Signup() {

  const {values, handleChange, handleSubmit, errors, handleBlur}: FormikProps<SignupValues> = useFormik<SignupValues>({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        validateOnChange: false,
        onSubmit: () => {},
      });

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
            <div className='flex h-[500px] xl:h-[650px] lg:h-[500px] md:h-[500px] shadow-2xl rounded-xl'>
                <form onSubmit={handleSubmit} className='flex flex-col w-[400px] lg:w-[550px] md:w-[350px] items-center py-12 rounded-xl md:rounded-r-none'>
                    <Image src={logo} alt='devoro-logo' className='h-32 w-40 mb-5'/>
                    <div className='flex items-center flex-col gap-5 w-full'>
                        <div className='flex relative w-full'>
                            <div className='flex items-center gap-4 w-full justify-center'>
                              <input onChange={handleChange} onBlur={handleBlur} value={values.username} id="username" name="username" type='type' placeholder='Username' className='w-[50%] px-2 py-2 rounded-lg border border-black/30'/>
                            </div>
                            <div className='absolute right-[107px] top-2'>
                              {errors.username &&
                              <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800 cursor-help'/>
                                    </TooltipTrigger>
                                    <TooltipContent className='bg-slate-800 text-white'>
                                        <p>{errors.username}</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              }     
                            </div>
                        </div>
                        <div className='flex relative  w-full'>
                            <div className='flex tems-center gap-4 w-full justify-center'>
                            <input onChange={handleChange} value={values.email} id="email" name="email" type='text' placeholder='Email' className='w-[50%] px-2 py-2 rounded-lg border border-black/30'/>
                            </div>
                            <div className='absolute right-[107px] top-2'>
                              {errors.email &&
                              <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800 cursor-help'/>
                                    </TooltipTrigger>
                                    <TooltipContent className='bg-slate-800 text-white'>
                                        <p>{errors.email}</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              }     
                            </div>
                        </div>
                        <div className='flex relative w-full'>
                            <div className='flex tems-center gap-4 w-full justify-center'>
                            <input onChange={handleChange} value={values.password} id="password" name="password" type='text' placeholder='Password' className='w-[50%] px-2 py-2 rounded-lg border border-black/30'/>
                            </div>
                            <div className='absolute right-[107px] top-2'>
                              {errors.password &&
                              <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800 cursor-help'/>
                                    </TooltipTrigger>
                                    <TooltipContent className='bg-slate-800 text-white'>
                                        <p>{errors.password}</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              }     
                            </div>
                        </div>
                        <div className='flex relative mb-5 w-full'>
                            <div className='flex tems-center gap-4 w-full justify-center'>
                            <input onChange={handleChange} value={values.cpassword} id="cpassword" name="cpassword" type='text' placeholder='Confirm Password' className='w-[50%] px-2 py-2 rounded-lg border border-black/30'/>
                            </div>
                            <div className='absolute right-[107px] top-2'>
                              {errors.cpassword &&
                              <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <RiErrorWarningFill size={24} className='text-red-800 cursor-help'/>
                                    </TooltipTrigger>
                                    <TooltipContent className='bg-slate-800 text-white'>
                                        <p>{errors.cpassword}</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              }     
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center text-center gap-5 w-[50%]'>
                        <button type='submit' className='bg-purple-900 py-2 px-28 w-full rounded-md font-semibold hover:bg-purple-700 text-white'>Log in</button>
                        <div className='flex items-center gap-1 text-sm w-[110%] justify-center'>
                            <span>Already have an account yet?</span>
                            <Link href={'/login'} className='text-purple-900 underline hover:font-normal'>Login</Link>
                        </div>
                    </div>
                </form>
                <div>
                  <Image src={banner} alt='formImg' className='h-full w-[450px] rounded-r-2xl lg:block hidden md:block'/> 
                </div>
            </div>
            </div>
        </div>
        )
}

