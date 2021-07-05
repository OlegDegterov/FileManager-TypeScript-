import React from 'react'
import Folders from "./Folders";

type PropsType = {
    data: any,
    folder:Array<Object>,
    getDataIdThunkCreator: ()=>void,
    getDataThunkCreator:()=>void,
    children:Array<Object>,
    id:number|null,
    title:string,

}

class FolderClass extends React.Component <PropsType> {
    componentDidMount() {
        this.props.getDataThunkCreator();
    }
    render() {

        return (
            <div>
                <Folders   children={this.props.children}
                           id={this.props.id}
                           title={this.props.title}
                           data={this.props.data.data}
                           folder={this.props.folder}
                           getFolder={this.props.getDataIdThunkCreator}/>
            </div>
        )
    }
}

export default FolderClass;