import React, {FC, useEffect} from 'react';
import pic from "../../../common/styles/assets/images/Rectangle.svg";
import BaseButton from "../../../common/components/BaseButton";
import {getItem, setItem} from "../../../common/hooks/useLocalStorage";
import {PropsType} from "../../../types/types";
import {WrapperContent} from "./ContentPage.styled";

const ContentPage: FC<PropsType>
  = ({setBlock}) => {
  const blocks = ['h', 'p', 'img', 'button']

  useEffect(() => {
    const el = document.getElementById(getItem('block'))
    if (el) el.style.border = `2px dashed red`

    blocks.filter(b => b !== getItem('block')).map(block => {
      const el = document.getElementById(block);
      if (el) el.style.border = `none`;
      return el
    })
  });

  const handler = (event: React.MouseEvent<HTMLElement>) => {
    setItem('block', event.currentTarget.id)
    setBlock(event.currentTarget.id)
    const el = document.getElementById(event.currentTarget.id)
    if (el) el.style.border = `2px dashed red`

    blocks.filter(b => b !== event.currentTarget.id).map(block => {
      const el = document.getElementById(block)
      if (el) el.style.border = `none`
      return el
    })
  }

  let arrImg = {
    imgX: Number(getItem('img-x')),
    imgY: Number(getItem('img-y')),
    imgO: Number(getItem('img-o')),
    imgB: Number(getItem('img-b'))
  }
  let arrH = {
    hX: Number(getItem('h-x')),
    hY: Number(getItem('h-y')),
    hO: Number(getItem('h-o')),
    hB: Number(getItem('h-b'))
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
        <h1 id='h' onClick={handler}>Animation Settings</h1>
        <p onClick={handler} id='p'>The user should have
          the option to select any
          element on the page and set up its animation using the controls
          in the right panel. A dotted line will show the element's position and state before the animation begins,
          giving
          the user a clear idea of how the animation will appear. The preview button on the top panel will open the
          result
          in a new tab.
        </p>
        <div onClick={handler} id='button' style={{width: 'fit-content'}}>
          <BaseButton width={'146px'} height={'51px'} title={'Button'}/>
        </div>
      </div>
      <div onClick={handler} id='img'>
        <img src={pic} alt='animy'/>
      </div>
    </WrapperContent>
  );
};

export default ContentPage;

