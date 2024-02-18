import React, {FC} from 'react';
import {BaseButtonPropsType, StyledButtonPropsType} from "../../types/types";
import styled from "styled-components";
import {baseTheme} from "../styles/Them.styled";

const BaseButton: FC<BaseButtonPropsType> = ({title,color, width, height, ...otherProps}) => {
  return (
    <StyledButton color={color} width={width} height={height}>{title}</StyledButton>
  );
};

export default BaseButton;

const StyledButton = styled.button.attrs(props=>({type:props.type? props.type:'button'}))<StyledButtonPropsType>`
    width: ${props => (props.width ? props.width : '87px')};
    height: ${props => (props.height ? props.height : '34px')};
    padding: 0 20px;
    background: ${props => (props.color ? props.color : `${baseTheme.colors.button.primary}`)};
    color:${baseTheme.colors.backgroundPage.pageWhite};
    
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16.94px;

    border: none;
    border-radius: 5px;
    cursor: pointer;
`