import { showTabs, selectTab } from '../common/tab/tabActions'
import axios from 'axios';
import consts from '../../consts'


export function getList() {
    const request = axios.get(`${consts.API_URL}/times`)
    return {
        type: 'TIMES_FETCHED',
        payload: request
    }
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        // initialize('billingCycleForm', INITIAL_VALUES),
    ]
}