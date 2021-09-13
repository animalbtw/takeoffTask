import * as React from 'react';
import {Button, createStyles, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {Logout} from "../store/actions/userActions";

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

const Header = (props) => {
  const handleLogOut = () => {
    const {dispatch} = props
    dispatch(Logout())
  }

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {
          !props.user.isLogin ? null: (
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
