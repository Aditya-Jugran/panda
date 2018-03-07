import {usersignalmentDetails} from '../action/action';
const userSignalmentDetails=(state={},action)=>{
    switch(action.type){
        case 'SINGNALMENT-FORM':
        return[...state,action.singnalmentDetail];

        default :
        return state;
    }
};
export default userSignalmentDetails;
