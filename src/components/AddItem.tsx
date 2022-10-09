import * as React from "react"
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, IconButton } from "@mui/material";
import * as styles from "../styles/Home.module.css"
import AddBoxIcon from '@mui/icons-material/AddBox';

interface Props {
  onClose: (title: string, body: string) => {}
}

const AddItem = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleCancel = () => {
    setOpen(false)
  }

  const handleAdd = async () => {
    setOpen(false);
    props.onClose(title, body)
  }

  return (
    <div className={styles.alignRight}>
      <IconButton onClick={() => setOpen(true)}>
        <AddBoxIcon fontSize="large"/>
      </IconButton>
      <Dialog open={open}>
        <DialogTitle>Añadir Copy Paste</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id='body'
            label="Texto"
            type="text"
            fullWidth
            variant='standard'
            onChange={(e) => setBody(e.target.value)}
            multiline
            minRows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={handleAdd}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddItem;