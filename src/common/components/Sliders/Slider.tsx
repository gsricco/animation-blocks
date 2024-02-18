import * as React from 'react';
import {FC, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import {baseTheme} from "../../styles/Them.styled";
import {getItem, setItem} from "../../hooks/useLocalStorage";


export type SliderPropsType = {
  setChange: (change: number) => void
  title?: string
  block: string
}
export const InputSlider: FC<SliderPropsType> = ({setChange, title, block}) => {
  const blockValue = getItem(block)
  const [value, setValue] = useState(getItem(block));
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setItem(block, newValue)
    setValue(newValue as number);
    setChange(newValue as number)

  };

  return (
    <Box sx={{width: 220}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography color={`${baseTheme.colors.text.options}`} fontWeight={'700'}>{title}</Typography>
        </Grid>
        <Grid item xs>
          <Slider
            style={{color: `${baseTheme.colors.backgroundElements.select}`}}
            value={blockValue}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            size='small'
          />
        </Grid>
        <Grid item>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}