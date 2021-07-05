import React, {useState} from 'react'
import s from "./Folder.module.css";

type PropsTypes = {
    props?:any,
    folder: Array<Object>,
    children:Array<Object>,
    getFolder: (folder:number | null)=>void,
    id:number|null,
    title:string,
}

const Folder: React.FC<PropsTypes> = (props) => {
    const [hidden, setHidden] = useState(true);


    console.log((props.folder
        .filter((obj:Object) => Object.values(obj)[0] === props.id))
        .map((item:any)=> item.children)
        .flat()
        .filter((v:any,i:any,a:any)=>a.findIndex((t:any)=>(t.id === v.id))===i))

    return <div>

        {(props.children)
            ? <div className={s.container}>
                <button
                    className={s.preloader} onClick={() => {
                    props.getFolder(props.id);
                    setHidden(!hidden);
                }}>&gt;
                </button>
                <div className={s.folderB}>{props.title}</div>
            </div>
            : <div className={s.folder}>{props.title}</div>}
        {
            ((props.folder
                .filter((obj:any) => Object.values(obj)[0] === props.id))
                .map((item:any) => item.children)
                .flat()
                .filter((v:any,i:any,a:any) => a.findIndex((t:any) => (t.id === v.id)) === i)
                .map((item:any) => <div className={s.item} hidden={hidden} key={item.id}>
                    {
                        (item.children)
                            ? <div className={s.container}>
                                <button
                                    className={s.preloader} onClick={() => {
                                    props.getFolder(item.id);
                                }}>&gt;
                                </button>
                                <div className={s.folderB}>{item.title}</div>
                            </div>
                            : <div className={s.folder}>{item.title}</div>
                    }
                </div>))
        }
    </div>

}
export default Folder;