'use client'

import Image from 'next/image'
import React from 'react'
import banner from '@/assets/loginBanner.jpg'
import logo from '@/public/Devoro-logo-mobile.png'
import { useFormik, FormikProps } from 'formik'
import Link from 'next/link'
import { LoginSchema } from '../validations/Validation'
import { RiErrorWarningFill } from "react-icons/ri";
import googleLogo from '@/assets/google-logo.png'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface LoginValues {
    email: string;
    password: string;
  }

const initialValues = {
  email: '',
  password: '',
}


export default function Login() {

  const {values, handleChange, handleSubmit, errors, handleBlur}: FormikProps<LoginValues> = useFormik<LoginValues>({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        validateOnChange: false,
        onSubmit: () => {},
      });

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
            <div className='flex h-[500px] xl:h-[600px] lg:h-[500px] md:h-[500px] shadow-2xl rounded-xl'>
                <form onSubmit={handleSubmit} className='flex flex-col w-[400px] lg:w-[550px] md:w-[350px] items-center py-12 rounded-xl md:rounded-r-none'>
                    <Image src={logo} alt='devoro-logo' className='h-32 w-40 mb-5'/>
                    <div className='flex items-center flex-col gap-5 w-full'>
                        <div className='flex relative w-full'>
                            <div className='flex items-center gap-4 w-full justify-center'>
                              <input onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" name="email" type='type' placeholder='Email' className='w-[50%] px-2 py-2 rounded-lg border border-black/30'/>
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
                        <div className='flex relative mb-5 w-full'>
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
                    </div>
                    <div className='flex flex-col items-center text-center gap-5 w-[50%]'>
                        <button type='submit' className='bg-purple-900 py-2 px-28 w-full rounded-md font-semibold hover:bg-purple-700 text-white'>Log in</button>
                        <div className='flex items-center gap-1 text-sm w-[101%] justify-between'>
                            <span>Don't have an account yet?</span>
                            <Link href={'/signup'} className='text-purple-900 underline hover:font-normal'>Register Now!</Link>
                        </div>
                        <div className='flex items-center w-full gap-2'>
                          <hr className='bg-black/20 w-full h-[2px]'></hr>
                          <span className='text-sm w-[310px]'>or login using</span>
                          <hr className='bg-black/20 w-full h-[2px]'></hr>
                        </div>
                        <div>
                          <div className='flex flex-col gap-1 items-center'>
                            <Link href='/api/auth/signin'><Image src={googleLogo} alt='google-logo' className='size-7 rounded-xl cursor-pointer'/></Link>
                            <span className='text-xs'>Google</span>
                          </div>
                        </div>
                    </div>
                </form>
                <div>
                  <Image src={banner} alt='formImg' className='h-full w-[400px] rounded-r-2xl lg:block hidden md:block'/> 
                </div>
            </div>
            </div>
        </div>
        )
}
