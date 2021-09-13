import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {
  Button,
  createStyles,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({}))

const DialogWindow = ({open, setOpen, setContacts, isPut, mdField, setPut}) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleChange = () => {
    fetch(`http://localhost:3000/contacts/${mdField.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      })
    }).then(() => {
      fetch('http://localhost:3000/contacts')
        .then(res => res.json())
        .then(data => setContacts(data))
    })
    setEmail('')
    setName('')
    setPhone('')
    setOpen(false)
    setPut(false)
  }

  const handleSubmit = () => {
    const newContact = {
      name: name,
      email: email,
      phone: phone
    }
    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newContact)
    })
      .then(res => res.json())
      .then(data => setContacts((prev) => [...prev, data]))
    setEmail('')
    setName('')
    setPhone('')
    setOpen(false)
  }


  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
        setPut(false)
      }}
    >
      <DialogTitle id="form-dialog-title">
        Создайте запись
      </DialogTitle>
      <DialogContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          margin={'dense'}
          label={'Имя'}
          type={'text'}
          fullWidth
          autoFocus
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          margin={'dense'}
          label={'Номер телефона'}
          type={'tel'}
          fullWidth
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          margin={'dense'}
          label={'Почта'}
          type={'email'}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          color={"secondary"}
          onClick={() => setOpen(false)}
        >
          Отмена
        </Button>
        <Button
          onClick={isPut ? handleChange : handleSubmit}
          variant="outlined"
          color={'primary'}
        >
          {
            isPut ? 'Изменить' : 'Создать'
          }
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default DialogWindow;
