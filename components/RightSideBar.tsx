"use client"
import Link  from 'next/link'
import Image from 'next/image'
import React from 'react'
import BankCard from './BankCard'
import Category from './Category'
import { countTransactionCategories } from '@/lib/utils'

const RightSideBar = ({user, banks, transactions}:RightSidebarProps) => {
    const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className='no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important'>
        <section className='flex flex-col pb-8'>
            <div style={{backgroundImage: "url('/icons/gradient-mesh.svg')"}} className='h-[120px] w-full bg-cover bg-no-repeat'/>
                <div className='relative flex px-6 max-xl:justify-center'>
                    <div className='flex items-center justify-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)]'>
                        <span className='text-5xl font-bold text-blue-500'>{user.firstName[0]}</span>
                    </div>
                    <div className='flex flex-col pt-24'>
                        <h1 className='text-[24px] leading-[30px] font-semibold text-gray-900'>
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className='text-16 font-normal text-gray-600'>
                            {user.email}
                        </p>
                    </div>
                </div>
        </section>
        <section className='flex flex-col justify-between gap-8 px-6 py-8'>
            <div className='flex w-full justify-between'>
                <h2 className='text-18 font-semibold text-gray-900'>My Banks</h2>
                <Link href='/' className='flex gap-2'>
                    <Image 
                    src="/icons/plus.svg"
                    width={20}
                    height={20}
                    alt='plus'
                    loading='lazy'
                    />
                    <h2 className='text-[14px] leading-[20px] font-semibold text-gray-600'>
                        Add Bank
                    </h2>
                </Link>
            </div>
            {banks?.length > 0 && (
                <div className='relative flex flex-1 flex-col justify-center gap-5'>
                    <div className='relative z-10'>
                        <BankCard 
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <BankCard 
                            key={banks[1].$id}
                            account={banks[1]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}
                        />
                        </div>
                    )}
                </div>
            )}
            <div className="mt-10 flex flex-1 flex-col gap-6">
                <h2 className="header-2">Top categories</h2>

                <div className='space-y-5'>
                    {categories.map((category, index) => (
                    <Category key={category.name} category={category} />
                    ))}
                </div>
        </div>
        </section>
    </aside>
  )
}

export default RightSideBar