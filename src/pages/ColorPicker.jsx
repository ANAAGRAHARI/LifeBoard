import React from 'react' 
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import {themeColors} from '../data/dummy'


const Change =(arg)=>{
  document.getElementById('preview').style.backgroundColor = arg.currentValue.hex
  themeColors[0].color=arg.currentValue.hex

}


const ColorPicker = () => {


  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='App'title='Theme Color Selector'/>
    <div className='text-center'>
      <div id='preview'/>
      <div className='flex justify-center items-center gap-20 flex-wrap'>
      <div>
        <p className='text-2xl font-semibold mt-2 mb-4'>
          Inline Pallete
        </p>
        <ColorPickerComponent
          id="inline-pallete"
          mode='Palette'
          modeSwitcher={false}
          inline
          showButtons={false}
          change={Change}
          />
        </div>
        <div>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
          <ColorPickerComponent
          id="inline-picker"
          mode='Picker'
          modeSwitcher={false}
          inline
          showButtons={false}
          change={Change}
          />
        </div>

    </div>
    </div>
    </div>
      )
}

export default ColorPicker