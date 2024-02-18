import React, {FC} from 'react';
import styled from "styled-components";
import pic from "../../common/styles/assets/images/Rectangle.svg";
import BaseButton from "../../common/components/BaseButton";
import {getItem, setItem} from "../../common/hooks/useLocalStorage";


type PropsType = {
  setBlock: (block: string) => void
}

type PropsStyleType = {
  arrImg: { imgX: number, imgY: number, imgO: number, imgB: number }
  // arrImg: LocalStorageValues
  arrH: { hX: number, hY: number, hO: number, hB: number }
  arrP: { pX: number, pY: number, pO: number, pB: number }
  arrBtn: { btnX: number, btnY: number, btnO: number, btnB: number }
}


const ContentPage: FC<PropsType>
  = ({setBlock}) => {
  const handler = (event: React.MouseEvent<HTMLElement>) => {
    setItem('block', event.currentTarget.id)
    setBlock(event.currentTarget.id)
  }


  // const arrImg:LocalStorageValues= useArrValuesBlock('img')

  let arrImg = {
    imgX:Number(getItem('img-x')),
    imgY:Number(getItem('img-y')),
    imgO:Number(getItem('img-o')),
    imgB:Number(getItem('img-b'))
  }
  let arrH = {
    hX: Number(getItem('h1-x')),
    hY: Number(getItem('h1-y')),
    hO: Number(getItem('h1-o')),
    hB: Number(getItem('h1-b'))
  }
  let arrP = {
    pX: Number(getItem('p-x')),
    pY: Number(getItem('p-y')),
    pO: Number(getItem('p-o')),
    pB: Number(getItem('p-b'))
  }
  let arrBtn = {
    btnX: Number(getItem('button-x')),
    btnY: Number(getItem('button-y')),
    btnO: Number(getItem('button-o')),
    btnB: Number(getItem('button-b'))
  }

  return (
    <WrapperContent arrImg={arrImg} arrH={arrH} arrP={arrP} arrBtn={arrBtn}>
      <div>
        <h1 id='h1' onClick={handler}>Animation Settings</h1>
        <p onClick={handler} id='p'>The user should have the option to select any
          element on the page and set up its animation using the controls
          in the right panel. A dotted line will show the element's position and state before the animation begins,
          giving
          the user a clear idea of how the animation will appear. The preview button on the top panel will open the
          result
          in a new tab.
        </p>
        <div onClick={handler} id='button'><BaseButton width={'146px'} height={'51px'} title={'Button'}/></div>
      </div>
      <div onClick={handler} id='img'><img src={pic} alt='animy'/></div>

    </WrapperContent>
  );
};

export default ContentPage;

const WrapperContent = styled.div<PropsStyleType>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    & h1 {
        position: relative;

        width: 374px;
        font-family: Inter, sans-serif;
        font-size: 43px;
        font-weight: 700;
        line-height: 52.04px;
        letter-spacing: -2px;
        padding: 20px 0;


        left: ${props => (props.arrH.hX ? `${props.arrH.hX - 51}px` : '0')};
        top: ${props => (props.arrH.hY ? `${props.arrH.hY - 51}px` : '0')};
        opacity: ${props => (props.arrH.hO ? (1 - props.arrH.hO / 100) : 1)};
        filter: ${props => (props.arrH.hB ? `blur(${props.arrH.hB / 100}rem)` : `blur(0rem)`)};
    }

    & p {
        position: relative;

        width: 374px;
        font-family: Inter, sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 22.05px;
        letter-spacing: 0;
        padding-right: 15px;


        left: ${props => (props.arrP.pX ? `${(props.arrP.pX) - 51}px` : '0')};
        top: ${props => (props.arrP.pY ? `${(props.arrP.pY) - 51}px` : '0')};
        opacity: ${props => (props.arrP.pO ? (1 - (props.arrP.pO) / 100) : 1)};
        filter: ${props => (props.arrP.pB ? `blur(${props.arrP.pB / 100}rem)` : `blur(0rem)`)};
    }

    & button {
        margin-top: 30px;

        position: relative;


        left: ${props => (props.arrBtn.btnX ? `${(props.arrBtn.btnX) - 51}px` : '0')};
        top: ${props => (props.arrBtn.btnY ? `${(props.arrBtn.btnY) - 51}px` : '0')};
        opacity: ${props => (props.arrBtn.btnO ? (1 - (props.arrBtn.btnO) / 100) : 1)};
        filter: ${props => (props.arrBtn.btnB ? `blur(${props.arrBtn.btnB / 100}rem)` : `blur(0rem)`)};
    }

    & img {
        position: relative;
        left: ${props => (props.arrImg.imgX ? `${(props.arrImg.imgX) - 51}px` : '0')};
        top: ${props => (props.arrImg.imgY ? `${(props.arrImg.imgY) - 51}px` : '0')};
        opacity: ${props => (props.arrImg.imgO ? (1 - (props.arrImg.imgO) / 100) : 1)};
        filter: ${props => (props.arrImg.imgB ? `blur(${props.arrImg.imgB / 100}rem)` : `blur(0rem)`)};
    }


`
