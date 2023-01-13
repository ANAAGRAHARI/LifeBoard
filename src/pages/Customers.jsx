import React from 'react'
import { GridComponent,Inject,ColumnsDirective,ColumnDirective,Toolbar,Page } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import {customersData,customersGrid} from '../data/dummy'
const Customer = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page'title='Customers'/>
    <GridComponent
      dataSource={customersData}
      width='auto'
      allowPaging
      allowSorting
      pageSettings={{pageCount:5}}
      toolbar={['Search']}>

        <ColumnsDirective>
        {customersGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}
        <Inject services ={[Toolbar,Page]}/>
        </ColumnsDirective>
      </GridComponent>
  </div>
  )
}

export default Customer