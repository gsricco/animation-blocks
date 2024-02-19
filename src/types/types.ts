import React, {ButtonHTMLAttributes, ReactNode} from "react";

export type MainPropsType = {
  children: ReactNode
}

//BaseButton.tsx
export type BaseButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  color?: string
  width?: string
  height?: string
}
export type StyledButtonPropsType = {
  color?: string
  height?: string
  type?: 'button' | 'reset' | 'submit'
  width?: string
  onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

//Slider.tsx
export type SliderPropsType = {
  setChange: (change: number) => void
  title?: string
  block: string
}
export type SettingsPropsType ={
  setChange:(change:number)=>void
  block:string
}

export type PropsType = {
  setBlock?: (block: string) => void
}

export type PropsStyleType = {
  arrImg: { imgX: number, imgY: number, imgO: number, imgB: number }
  arrH: { hX: number, hY: number, hO: number, hB: number }
  arrP: { pX: number, pY: number, pO: number, pB: number }
  arrBtn: { btnX: number, btnY: number, btnO: number, btnB: number }
}
