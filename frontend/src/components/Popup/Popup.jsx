import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { MdOutlineClose } from "react-icons/md";
import "./popup.scss";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth="true"
      TransitionComponent={Slide}
      TransitionProps={{
        direction: "up",
        timeout: 500,
      }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>{title}</div>
          <button className="close-btn" onClick={handleClose}>
            <MdOutlineClose />
          </button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
