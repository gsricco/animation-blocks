import React, {FC} from 'react';
import {InputSlider} from "../../../common/components/Sliders/Slider";
import {SettingsPropsType} from "../../../types/types";
import BaseButton from "../../../common/components/BaseButton";
import {StyledResetSettings, WrapperSettings} from "./Settings.styled";
import {clearAll} from "../../../common/hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import {baseTheme} from "../../../common/styles/Them.styled";


const SettingsPanel: FC<SettingsPropsType> = ({setChange, block}) => {

  const handlerReset = () => {
    clearAll()
    setChange(1)
  }

  return (
    <WrapperSettings>
      <Typography style={{textAlign:'center', fontWeight:'700', margin:'20px', textShadow:`2px 2px 2px ${baseTheme.colors.backgroundElements.select}`}}>
        SettingsPanel
      </Typography>
      <InputSlider title={'Y'} setChange={setChange} block={`${block}-y`}/>
      <InputSlider title={'X'} setChange={setChange} block={`${block}-x`}/>
      <InputSlider title={'Opacity'} setChange={setChange} block={`${block}-o`}/>
      <InputSlider title={'Blur'} setChange={setChange} block={`${block}-b`}/>
      <StyledResetSettings>
        <BaseButton width={'fit-content'} title={'Reset settings'} onClick={handlerReset}/>
      </StyledResetSettings>
    </WrapperSettings>
  );
};

export default SettingsPanel;