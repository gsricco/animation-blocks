import React from 'react';
import {WrapperHeader} from "./Header.styled";
import logo from '../../common/styles/assets/images/Logo.svg'
import {BaseModal} from "../../common/components/modals/BaseModal";

const Header = () => {
  return (
    <WrapperHeader>
      <img src={logo} alt={'logo'}/>
      <BaseModal/>
    </WrapperHeader>
  );
};

export default Header;