import * as React from 'react';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import DialogWindow from "./components/DialogWindow";

const App = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <div>
        <Header setOpen={setOpen}/>
      </div>
      <div>
        <AppRouter />
      </div>
      <DialogWindow open={open} setOpen={setOpen}/>
    </div>
  );
};

export default App;
