import styled from "styled-components";
import {baseTheme} from "../../../common/styles/Them.styled";

export const WrapperPage = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const StyledContent = styled.div`
    display: flex;
    width: 874px;
    height: fit-content;
    background: ${baseTheme.colors.backgroundPage.pageWhite};
    margin: 30px 60px;
    padding: 65px;
`
export const StyledSettingsPanel = styled.div`
    display: flex;
    justify-content: center;
    width: 240px;
    height: 763px;
    background: ${baseTheme.colors.backgroundPage.pageWhite};
    padding: 10px;
`
