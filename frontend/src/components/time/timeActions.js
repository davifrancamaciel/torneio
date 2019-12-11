import { showTabs, selectTab } from '../common/tab/tabActions'
import axios from 'axios';
import consts from '../../consts'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form';

const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${consts.API_URL}/times`)
    return {
        type: 'TIMES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function submit(values, method) {
    return dispatch => {
        const id = values.id ? values.id : ''

        axios[method](`${consts.API_URL}/times/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {                
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('timeForm', INITIAL_VALUES),
    ]
}

export function showDelete(time) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('timeForm', time)
    ]
}

export function showUpdate(time) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('timeForm', time)
    ]
}