import * as React from 'react';
import {connect} from "react-redux";
import {
  Button,
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import DialogWindow from "../components/DialogWindow";
import LoadingStub from "../components/LoadingStub";

const useStyles = makeStyles(() => createStyles({
  addBtn: {
    position: 'absolute',
    bottom: '4%',
    right: '2%',
    borderRadius: '50%',
    width: 75,
    height: 75,
    background: '#6f87f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    color: '#ffffff',
    '&:hover': {
      background: '#2d55ff'
    }
  },
  rows: {},
  columns: {
    width: 150,
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const Home = () => {
  const [open, setOpen] = React.useState(false)
  const [contacts, setContacts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPut, setPut] = React.useState(false)
  const [mdField, setMdField] = React.useState({})
  const classes = useStyles();

  React.useEffect(async () => {
    const response = await fetch('http://localhost:3000/contacts')
    const data = await response.json()
    setContacts(data)
    setIsLoading(false)
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(setContacts(contacts.filter(item => item.id !== id)))

  }

  const handleChange = (name, phone, email, id) => {
    setMdField({
      name: name,
      phone: phone,
      email: email,
      id: id
    })
    setOpen(true)
    setPut(true)
  }

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <LoadingStub/>
      </div>
    )
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow className={classes.rows}>
            <TableCell className={classes.columns} align="left">
              Имя:
            </TableCell>
            <TableCell className={classes.columns} align="left">
              Номер телефона:
            </TableCell>
            <TableCell className={classes.columns} align="left">
              Почта:
            </TableCell>
            <TableCell className={classes.columns} align="right">
              Действия:
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            contacts.length === 0 ? (
              <>
                <TableCell className={classes.columns} align={'right'}>
                  Записей пока нет
                </TableCell>
              </>
            ) : (
              <>
                {
                  contacts.map(({name, email, phone, id}) => (
                    <TableRow className={classes.rows} key={id}>
                      <TableCell className={classes.columns} align={'left'}>
                        {name}
                      </TableCell>
                      <TableCell className={classes.columns} align={'left'}>
                        {phone}
                      </TableCell>
                      <TableCell className={classes.columns} align={'left'}>
                        {email}
                      </TableCell>
                      <TableCell className={classes.columns} align={'right'}>
                        <Button
                          onClick={() => handleChange(name, email, phone, id)}
                          color={'primary'}
                        >
                          Изм.
                        </Button>
                        <Button
                          onClick={() => handleDelete(id)}
                          variant={'contained'}
                          color={'secondary'}
                        >
                          X
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </>
            )
          }
        </TableBody>
      </Table>
      <Button
        onClick={() => setOpen(true)}
        className={classes.addBtn}
      >
        +
      </Button>
      <DialogWindow
        mdField={mdField}
        setPut={setPut}
        isPut={isPut}
        setContacts={setContacts}
        open={open}
        setOpen={setOpen}
      />
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user
})


export default connect(mapStateToProps)(Home);
