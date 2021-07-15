const LOAD_TRAIL ="LOAD_TRAIL"
const ADD_TRAIL ="ADD_TRAIL"
const DELETE_TRAIL = "DELETE_TRAIL";
const EDIT_TRAIL = "EDIT_TRAIL";

const initialState = {
    list:[  
        {   name:'pct',
            country:'usa',
            length:'4300km',
            time:'6M',
            detail:'ㅎㅎㅎㅎ'},
        {
            name:'ㅇㅇㅇt',
            country:'uㅇㅇ',
            length:'4ㅇㅇ0km',
            time:'6ㅇㅇM',
            detail:'ㅎㅇㅇㅎㅎㅎ'},
        {   name:'22222pcㅎㅎt',
            country:'usㅎa',
            length:'4300ㅎㄴkm',
            time:'6ㅋM',
            detail:'ㅎㅎㅎㅎ'},
    ]
};
export const loadTrail = (trail_list) => {
    return {type:LOAD_TRAIL,trail_list}
};

export const addTrail = (trail) => {
    return {type:ADD_TRAIL,trail}
};

export const deleteTrail = (trail) => {
    return {type:DELETE_TRAIL,trail}
};

export const editTrail = (trail_id,trail) => {
    return {type:EDIT_TRAIL,trail_id,trail}
    
};


  //reducer
export default function reducer(state = initialState, action={}) {
    switch (action.type) {
        case "LOAD_TRAIL":{
            if(action.trail_list.length > 0){
                return {list: action.trail_list}
            }
            return state;
        }
        case "ADD_TRAIL":{
            const new_trail_list  =[...state.list, action.trail];
            return {list: new_trail_list};
        }
        
        case "EDIT_TRAIL":{
            const trail_list= state.list.map((list, idx) => {
                
                if (list.trail_idx === action.trail.trail_idx) {
                    return {
                        ...list,
                        name: action.trail.name,
                        country: action.trail.country,
                        length: action.trail.contents,
                        time: action.trail.contents,
                        detail: action.trail.contents,
                        id: idx,
                      };
                    }
            
                    return list;
                  });
                  return { list: trail_list };
                }

        case "DELETE_TRAIL":{
            const trail_list = state.list.filter((l, idx) => {
                if(idx !== action.trail){
                    return l;
                }
            });
            return {list: trail_list};
        }    
        default:
            return state;
    }
}

const actionCreators = {
    addTrail,
    loadTrail,
    deleteTrail,
    editTrail,
};

export {actionCreators};
