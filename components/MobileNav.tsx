"use client"
import React from 'react'
import Image from 'next/image'

import {
    DialogContent,
    DialogTitle,
  } from "@radix-ui/react-dialog";
  

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Footer from './Footer';

  

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image
                src="/icons/hamburger.svg"
                width={30}
                height={30}
                alt="menu"
                className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side='left' className='border-none bg-white'>
            <DialogTitle className="sr-only">Menu</DialogTitle>
                    <Link href="/" className=" flex  cursor-pointer items-center px-4 gap-4">
                        <Image
                        src="/icons/zicrocs.svg.jpg"
                        width={34}
                        height={34}
                        alt='Prosper'
                        className='size-[24px] max-xl:size-14'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black'> Zicros</h1>
                    </Link>

                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map((item) => {
                        
                                const isActive = pathname ===item.route || pathname.startsWith(`${item.route}/`)

                                return(
                                    <SheetClose asChild key={item.route}>
                                        <Link href={item.route} key={item.label} className={cn('flex gap-3 items-center p-4 rounded-lg w-full max-w-60', {'bg-blue-700': isActive})}>
                                        <div className='relative size-6'>
                                            <Image
                                            src={item.imgURL}
                                            alt={item.label}
                                            width={20}
                                            height={20}
                                            className={cn({
                                                'brightness-[3] invert-0':isActive
                                            })}
                                            />
                                        </div>
                                        <p className={cn("text-16 font-semibold text-black", {"text-white": isActive})}>{item.label}</p>
                                    </Link>
                                </SheetClose>
                                    
                                )
                            })}
                            User
                            </nav>
                        </SheetClose>
                        <Footer user={user} type='moblie'/>
                    </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav