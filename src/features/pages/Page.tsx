import React, {useState} from 'react';
import styled from "styled-components";
import {baseTheme} from "../../common/styles/Them.styled";
import ContentPage from "./ContentPage";
import SettingsPanel from "./SettingsPanel";
import {getItem} from "../../common/hooks/useLocalStorage";

const Page = () => {
  const [block, setBlock] = useState(getItem('block'))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_change, setChange] = useState(getItem(`${block}-y`))

  return (
    <WrapperPage>
      <StyledContent>
        <ContentPage setBlock={setBlock}/>
      </StyledContent>
      <StyledSettingsPanel>
        <SettingsPanel setChange={setChange} block={block}/>
      </StyledSettingsPanel>
    </WrapperPage>
  );
};

export default Page;

const WrapperPage = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const StyledContent = styled.div`
    display: flex;
    width: 874px;
    height: fit-content;
    background: ${baseTheme.colors.backgroundPage.pageWhite};
    margin: 30px 60px;
    padding: 65px;
`
const StyledSettingsPanel = styled.div`
    display: flex;
    justify-content: center;
    width: 240px;
    height: 763px;
    background: ${baseTheme.colors.backgroundPage.pageWhite};
    padding: 10px;

`