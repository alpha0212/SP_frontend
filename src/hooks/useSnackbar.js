import { useState } from "react";

export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleOpen = (msg) => {
    setOpen(true);
    setMessage(msg);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    setMessage(undefined);
  };

  return {
    open,
    message,
    openSnackbar: handleOpen,
    onClose: handleClose,
    autoHideDuration: 4000,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    ContentProps: {
      "aria-describedby": "message-id",
    },
  };
};
