import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";

interface Props {
    onDelete: () => void
}

const DeleteItem = (props: Props) => {
    const [open, setOpen] = useState(false);

    function handleClose(confirmation: boolean) {
        setOpen(false);
        if(confirmation) {
            props.onDelete();
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>Eliminar</Button>
            <Dialog open={open}>
                <DialogTitle>Eliminar copypaste</DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose(false)}>Cancelar</Button>
                    <Button onClick={() => handleClose(true)} variant="contained">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div> 
    )
}

export default DeleteItem;