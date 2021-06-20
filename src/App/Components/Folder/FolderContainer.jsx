import React from 'react'
import Folders from "./Folders";
import {connect} from "react-redux";
import ReducerF, {getDataIdThunkCreator, getDataThunkCreator} from "../../Redux/folderReducer";
import FolderClass from "./FolderClass";
import {AppStateType} from "../../Redux/reduxStore";

/*type MapStateToPropsType = {
    data:Object,
    folder:Array<Object>
}
type MapDispatchToPropsType = {
    getDataIdThunkCreator: (folder:number | null)=>void,
    getDataThunkCreator:()=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;*/

let mapStateToProps = (state/*:AppStateType*/)/*:MapStateToPropsType*/ =>{
    return {
        data:state.ReducerF,
        folder:state.ReducerF.children,
    }
}

const FolderContainer = connect/*<MapStateToPropsType,MapDispatchToPropsType,AppStateType>*/
    (mapStateToProps,{getDataThunkCreator, getDataIdThunkCreator})(FolderClass);

export default FolderContainer;