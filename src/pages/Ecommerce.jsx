/* eslint-disable no-unused-vars */
import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import {Stacked,Pie,Button,SparkLine}from '../components'
import {earningData,SparklineAreaData,ecomPieChartDat} from '../data/dummy'
import { useStateContext } from '../context/ContextP'

const Ecommerse = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white
        dark:text-grey-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3
        bg-hero-pattern bg-no-repeat
        bg-cover bg-center'>
        
        <div className='flex justify-between item-center'>
          <div>
            <p className='font-bold text-grey-400'>
              Earnings
            </p>
            <p className='text-2xl'>$63,448
            </p>
          </div>
          </div>

          <div className='mt-6'>
          <Button 
          color="white"
          bgColor='blue'
          text="Download"
          boarderRadius="10px"
          size='md'
          />
        </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item)=>(
            <div 
            key={item.title}
            className="bg-white
            dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-56
            p-4 pt-9 rounded-2xl">
              <button type="button"
              style={{color:item.iconColor,
                backgroundColor:item.iconBg
              }}
              className="text-2xl opacity-0.9">
                {item.icon}
              </button> 
              <p className='='mt-3>
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                  </span>  
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <SparkLine
        currentColor="blue"
        id="line-sparkline"
        type="line"
        height="80px"
        width="250px"
        data={SparklineAreaData}
        color="blue"
        />
        
      </div>
      </div>
  )
}

export default Ecommerse