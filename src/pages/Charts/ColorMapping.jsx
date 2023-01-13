import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,Tooltip,ColumnSeries, RangeColorSettingDirective, RangeColorSettingsDirective } from '@syncfusion/ej2-react-charts'
import { colorMappingData,ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy'
import  {ChartsHeader} from '../../components'
import {useStateContext} from '../../context/ContextP'
const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <ChartsHeader category="Color Maooing" title="Weather by month "/>
    <div className='w-full'>
    <ChartComponent
    id='charts'
    primaryYAxis={ColorMappingPrimaryYAxis}
    primaryXAxis ={ColorMappingPrimaryXAxis}
    chartArea={{border:{width:0}}}
    tooltip ={{enable:true}}
    background={currentMode === 'Dark'? '#33373E' :'#fff'}
    legemdSettings={{mode:'Range' ,background :'white'}}
    >
      <Inject services={[Legend,Category,Tooltip,ColumnSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={colorMappingData[0]}
          name='USA'
          xName='x'
          yName='y'
          type='Column'
          cornerRadius={{
            topLeft:10,
            topRight : 10,
          }}/>
      </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item,index)=>(
            console.log(item),
            <RangeColorSettingDirective key={index} {...item}/> ))}
          </RangeColorSettingsDirective>
    </ChartComponent>
  </div>
  </div>
  )
}

export default ColorMapping