import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className='flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6'>
      <div className='flex size-full max-w-[100px] items-center sm:max-w-[120px]'>
        <DoughnutChart accounts={accounts}/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='flex items-center justify-center font-bold'>
            Bank Accounts: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
            <p className='text-[14px] leading-[20px] font-medium text-gray-600'>
              Total Current Balance
            </p>
            <p className='text-[24px] leading-[30px] lg:text-30 flex-1 font-semibold text-gray-90 flex items-center justify-center gap-2'>

              <AnimatedCounter amount={totalCurrentBalance}/>
            </p>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox