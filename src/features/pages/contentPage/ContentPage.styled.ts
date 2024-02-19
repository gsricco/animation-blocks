import styled from "styled-components";
import {PropsStyleType} from "../../../types/types";

export const WrapperContent = styled.div<PropsStyleType>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    & h1 {
        font-family: Inter, sans-serif;
        font-size: 43px;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: -2px;
        padding: 20px 4px;

        position: relative;
        left: ${props => (props.arrH.hX ? `${props.arrH.hX}px` : 0)};
        top: ${props => (props.arrH.hY ? `${props.arrH.hY}px` : 0)};
        opacity: ${props => (props.arrH.hO ? (1 - props.arrH.hO / 100) : 1)};
        filter: ${props => (props.arrH.hB ? `blur(${props.arrH.hB / 100}rem)` : `blur(0rem)`)};
    }

    & p {
        width: 374px;
        font-family: Inter, sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0;
        padding: 4px 15px 4px 4px;

        position: relative;
        left: ${props => (props.arrP.pX ? `${(props.arrP.pX)}px` : '0')};
        top: ${props => (props.arrP.pY ? `${(props.arrP.pY)}px` : '0')};
        opacity: ${props => (props.arrP.pO ? (1 - (props.arrP.pO) / 100) : 1)};
        filter: ${props => (props.arrP.pB ? `blur(${props.arrP.pB / 100}rem)` : `blur(0rem)`)};
    }

    & #button {
        margin-top: 30px;

        position: relative;
        left: ${props => (props.arrBtn.btnX ? `${(props.arrBtn.btnX)}px` : '0')};
        top: ${props => (props.arrBtn.btnY ? `${(props.arrBtn.btnY)}px` : '0')};
        opacity: ${props => (props.arrBtn.btnO ? (1 - (props.arrBtn.btnO) / 100) : 1)};
        filter: ${props => (props.arrBtn.btnB ? `blur(${props.arrBtn.btnB / 100}rem)` : `blur(0rem)`)};
    }

    & #img {
        position: relative;
        left: ${props => (props.arrImg.imgX ? `${(props.arrImg.imgX)}px` : '0')};
        top: ${props => (props.arrImg.imgY ? `${(props.arrImg.imgY)}px` : '0')};
        opacity: ${props => (props.arrImg.imgO ? (1 - (props.arrImg.imgO) / 100) : 1)};
        filter: ${props => (props.arrImg.imgB ? `blur(${props.arrImg.imgB / 100}rem)` : `blur(0rem)`)};
    }


`
