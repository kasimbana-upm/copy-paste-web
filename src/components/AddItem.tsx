import * as React from "react"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "../components/Button"
import add from "../assets/add.png"
import * as styles from "../styles/Home.module.css"

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
      <img src={add} alt="add" className={styles.addItem} onClick={() => setOpen(true)}></img>
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