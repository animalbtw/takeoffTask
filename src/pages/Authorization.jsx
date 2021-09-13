import * as React from 'react';
import {Button, createStyles, makeStyles, Paper, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  wrapper_inner: {
    display: 'flex',
    flexDirection: 'column',
    '& > *' : {
      paddingTop: '20px'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}))

const Authorization = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const classes = useStyles()

  const handleLogin = () => {

  }

  return (
    <div className={classes.container}>
      <Paper
        elevation={3}
        className={classes.wrapper}
      >
        <div className={classes.wrapper_inner}>
          <Typography
            variant="h5"
          >
            Войти
          </Typography>
          <div>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoFocus
              margin={'dense'}
              id={name}
              label={'Почта'}
              type={'email'}
              fullWidth
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              margin={'dense'}
              label={'Пароль'}
              type={'password'}
              fullWidth
            />
          </div>
          <div className={classes.actions}>
            <Button
              variant="outlined"
              color={'primary'}
              onClick={handleLogin}
            >
              Войти
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Authorization;
