import React, {useState} from 'react';
import ContentPage from "../contentPage/ContentPage";
import SettingsPanel from "../SettingsPanel";
import {getItem} from "../../../common/hooks/useLocalStorage";
import {StyledContent, StyledSettingsPanel, WrapperPage} from "./Page.styled";

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

