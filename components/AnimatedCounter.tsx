'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount:number}) => {
  return (
    <span>
        <CountUp decimal=',' decimals={2} prefix='$' end={amount}/>
    </span>
  )
}

export default AnimatedCounter