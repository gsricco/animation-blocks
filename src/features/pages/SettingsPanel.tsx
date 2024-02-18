import React, {FC} from 'react';
import {InputSlider} from "../../common/components/Sliders/Slider";


export type SettingsPropsType ={
  setChange:(change:number)=>void
  block:string
}
const SettingsPanel:FC<SettingsPropsType> = ({setChange, block}) => {
  return (
    <div>
      SettingsPanel
      <InputSlider title={'Y'} setChange={setChange} block={`${block}-y`}/>
      <InputSlider title={'X'} setChange={setChange} block={`${block}-x`}/>
      <InputSlider title={'Opacity'} setChange={setChange} block={`${block}-o`}/>
      <InputSlider title={'Blur'} setChange={setChange} block={`${block}-b`}/>
    </div>
  );
};

export default SettingsPanel;