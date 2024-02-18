import * as React from 'react';
import {FC} from 'react';
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
  const blockValue = getItem(block) || 0
  const min = block.slice(-1) === 'x' || block.slice(-1) === 'y' ? -100 : 0

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (newValue < -100) newValue = -100
    setItem(block, newValue)
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
            max={100}
            min={min}
          />
        </Grid>
        <Grid item>
          <Typography>{blockValue}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}