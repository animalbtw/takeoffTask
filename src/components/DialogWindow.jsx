import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {Button, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {connect} from "react-redux";


const DialogWindow = ({user, open, setOpen}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="form-dialog-title">

      </DialogTitle>
      <DialogContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoFocus
          margin={'dense'}
          id={name}
          label={'Email address'}
          type={'email'}
          fullWidth
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin={'dense'}
          label={'Password'}
          type={'password'}
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
          variant="outlined"
          color={'primary'}
        >
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(DialogWindow);
