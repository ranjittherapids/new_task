import {ADD_USER} from './constant'

export const add_user = user_data => ({
         type: ADD_USER,
         payload: user_data,
       });

