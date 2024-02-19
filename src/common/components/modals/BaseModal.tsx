import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import {Button, IconButton} from "@mui/material";
import ContentPage from "../../../features/pages/contentPage/ContentPage";
import styled from "styled-components";
import {baseTheme} from "../../styles/Them.styled";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'fit-content',
  bgcolor: `${baseTheme.colors.backgroundPage.dark}`,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  m: 'auto',
};


export const BaseModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant={"contained"} style={{borderRadius:'5px', width:'87px', height:'34px', textTransform:'capitalize'}}>Preview</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} style={{position:'relative', top:'-30px', left:'100%', cursor:'pointer', color:'white'}}>
              <CloseIcon />
            </IconButton>
            <StyledPreview>
              <ContentPage />
            </StyledPreview>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const StyledPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 874px;
    background: bisque;
    margin: 65px auto;
    padding: 65px;
`
