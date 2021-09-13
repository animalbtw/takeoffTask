import * as React from 'react';
import {Button, createStyles, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {Login} from "../store/actions/userActions";
import { useHistory } from "react-router-dom";


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
  },
  error: {
    color: 'red'
  }
}))

const Authorization = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fetchedUsers, setFetchedUsers] = React.useState([]);
  const [error, setError] = React.useState(false)
  const classes = useStyles()
  const history = useHistory()

  React.useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setFetchedUsers(data))
  }, [])

  const handleLogin = () => {
    const {dispatch} = props
    const usersEmail = fetchedUsers.map(item => item.email == email)
    const usersPassword = fetchedUsers.map(item => item.password == password)
    if (usersEmail[0] && usersPassword[0]) {
      dispatch(Login())
      history.push('/')
    } else {
      setError(true)
    }
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
          {
            error ? (
              <Typography
                className={classes.error}
              >
                Неверные данные
              </Typography>
            ) : null
          }
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Authorization);
