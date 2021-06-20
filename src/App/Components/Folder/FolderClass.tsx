import React from 'react'
import Folders from "./Folders";

type PropsType = {
    data: any,
    folder:Array<Object>,
    getDataIdThunkCreator: ()=>void,
    getDataThunkCreator:()=>void
}

class FolderClass extends React.Component <PropsType> {
    componentDidMount() {
        this.props.getDataThunkCreator();
    }
    render() {

            return (
        <div>
            <Folders  data={this.props.data.data} folder={this.props.folder} getFolder={this.props.getDataIdThunkCreator}/>
        </div>
            )
    }
}

export default FolderClass;