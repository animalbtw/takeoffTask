import * as React from 'react';
import {Button, createStyles, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => createStyles({
  wrapper: {
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
}))

const Header = ({user, setOpen}) => {
  const handleLogOut = () => {
    console.log('Выход')
  }
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {
          !user.isLogin ? null: (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleLogOut()}
            >
              Выйти
            </Button>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Header);
