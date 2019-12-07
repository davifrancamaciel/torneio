import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../components/common/tab/tabReducer'
import TimeReducer from '../components/time/timeReducer'

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    tab: TabReducer,
     time: TimeReducer,
    // time: () => ({ list: [{ id: 1, nome: 'Fla' }] })
})

export default rootReducer