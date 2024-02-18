import styled from "styled-components";
import {baseTheme} from "../common/styles/Them.styled";

export const WrapperApp = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: ${baseTheme.colors.backgroundPage.main};
    padding: 10px;
`