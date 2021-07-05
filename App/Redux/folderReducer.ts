import {API} from "../API/api";
import {Dispatch} from "redux";

const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA";


type InitialStateType = {
    data: Array<Object>,
    children: Array<Object>
}

let initialState:InitialStateType = {
    data: [],
    children: []
};

const ReducerF = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case GET_DATA: {
            return {...state, data: action.data}
        }
        case SET_DATA: {
            return {
                ...state, children: [...state.children, action.data]
            }
        }
        default:
            return state;
    }
}

type  getDataActonType = {
    type: typeof GET_DATA,
    data:Array<Object>
}
type  getDataIdType = {
    type: typeof SET_DATA,
    data:Array<Object>
}

type ActionsTypes = getDataActonType | getDataIdType;

export const getData = (data:Array<Object>):getDataActonType => ({type: GET_DATA, data});
export const getDataId = (data:Array<Object>):getDataIdType => ({type: SET_DATA, data});

type DispatchType = Dispatch<ActionsTypes>

export const getDataThunkCreator = () => {
    return (dispatch:DispatchType) => {
        API.getData().then((data) => {
            dispatch(getData(data))
        })
    }
}
export const getDataIdThunkCreator = (id:number) => {
    return (dispatch:DispatchType) => {
        API.getDataId(id).then((data) => {
            dispatch(getDataId(data))
        })
    }
}
export default ReducerF;


