import React, {FC} from 'react';
import {MainPropsType} from "../../types/types";
import {WrapperMain} from "./Main.styled";

const Main: FC<MainPropsType> = ({children}) => {
  return (
    <WrapperMain>
      {children}
    </WrapperMain>
  );
};

export default Main;