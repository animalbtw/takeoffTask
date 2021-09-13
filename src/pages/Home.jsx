import * as React from 'react';
import {connect} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const Home = () => {
  const [contacts, setContacts] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(async () => {
    const response = await fetch('http://localhost:3000/contacts')
    const data = await response.json()
    setContacts(data)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              Имя:
            </TableCell>
            <TableCell align="center">
              Номер телефона:
            </TableCell>
            <TableCell align="center">
              Почта:
            </TableCell>
            <TableCell align="right">
              actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            contacts.map(({name, email, phone}, index) => (
              <TableRow key={index}>
                <TableCell align={'center'}>{name}</TableCell>
                <TableCell align={'center'}>{phone}</TableCell>
                <TableCell align={'center'}>{email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user
})


export default connect(mapStateToProps)(Home);
