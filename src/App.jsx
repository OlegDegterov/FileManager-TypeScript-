import React from 'react'
import s from "./App.module.css";
import Header from "./App/Components/Header/Header";
import FolderContainer from "./App/Components/Folder/FolderContainer";
import Content from "./App/Components/Content/Content";


const App = (props) => {
  return (
      <div className={s.wrapper}>
        <div className={s.header}>
          <Header/>
        </div>
        <div className={s.folder}>
          <FolderContainer/>
        </div>
        <div className={s.content}>
          <Content/>
        </div>

      </div>
  )
};
export default App;
