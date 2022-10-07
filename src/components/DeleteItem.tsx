import { Button, Dialog, DialogActions, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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
            <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon/>
            </IconButton>
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