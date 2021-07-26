import React from 'react'
import s from "./Folders.module.css";
import Folder from "./Folder";
type PropsTypes = {
    folder: Array<Object>,
    children:any,
    getFolder: (folder:number | null)=>void,
    id:number|null,
    title:string,
    data:any,

}
const Folders: React.FC<PropsTypes> = (props) => {
    return (
        <div className={s.folder}>
            {
                (props.data.children)
                    ? props.data.children.map((content) => <Folder key={content.id}
                                                                           title={content.title}
                                                                           id={content.id}
                                                                           getFolder={props.getFolder}
                                                                           children={content.children}
                                                                           folder={props.folder}/>)
                    : ''
            }
        </div>
    )
};
export default Folders;