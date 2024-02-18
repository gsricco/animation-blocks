import {ButtonHTMLAttributes, ReactNode} from "react";

export type MainPropsType = {
  children: ReactNode
}

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
}
