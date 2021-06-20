import React from 'react'
import s from "./Folders.module.css";
import Folder from "./Folder";
/*type PropsTypes = {
    props:any,
    folder: Array<Object>,
    children:Array<Object>,
    getFolder: (folder:number | null)=>void,
    id:number|null,
    title:string,
    data:Array<Object>,

}*/
const Folders/*: React.FC<PropsTypes>*/ = (props) => {
    debugger
    return (
            <div className={s.folder}>
                {
                    (props.data.children)
                        ? props.data.children.map((content/*:any*/) => <Folder key={content.id}
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