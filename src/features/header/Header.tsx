import React from 'react';
import {WrapperHeader} from "./Header.styled";
import logo from '../../common/styles/assets/images/Logo.svg'
import BaseButton from "../../common/components/BaseButton";

const Header = () => {
  return (
    <WrapperHeader>
      <img src={logo} alt={'logo'}/>
      <BaseButton title={'Preview'}/>
    </WrapperHeader>
  );
};

export default Header;