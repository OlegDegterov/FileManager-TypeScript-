import React from 'react'
import s from "./App.module.css";
import Header from "./Components/Header/Header";
import FolderContainer from "./Components/Folder/FolderContainer";
import Content from "./Components/Content/Content";

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