import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,Tooltip,ColumnSeries,DataLabel } from '@syncfusion/ej2-react-charts'
import { barCustomSeries,barPrimaryXAxis,barPrimaryYAxis } from '../../data/dummy'
import  {ChartsHeader} from '../../components'
import {useStateContext} from '../../context/ContextP'

const Bar = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Bar" title="Olympic Medal Count-RIO"/>
      <ChartComponent
      id='charts'
      primaryYAxis={barPrimaryYAxis}
      primaryXAxis ={barPrimaryXAxis}
      chartArea={{border:{width:0}}}
      tooltip ={{enable:true}}
      background={currentMode === 'Dark'? '#33373E' :'#fff'}
      legemdSettings={{background :'white'}}
      >
        <Inject services={[Legend,Category,Tooltip,ColumnSeries,DataLabel]}/>
        <SeriesCollectionDirective>

          {barCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>

      </ChartComponent>

    </div>
  )
}

export default Bar