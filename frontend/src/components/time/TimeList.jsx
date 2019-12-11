import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate, showDelete } from './timeActions';
import Button from '../common/Button';

class TimeList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {

        const list = this.props.list || []

        return list.map(item => (
            <tr key={item.id}>
                <td>{item.nome}</td>
                <td>
                    <Button classButton='warning' icon='pencil'
                        onClick={() => this.props.showUpdate(item)} />

                    <Button classButton='danger' icon='trash-o'
                        onClick={() => this.props.showDelete(item)} />                    
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th className='tableActions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({ list: state.time.list })
const mapDsipatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDsipatchToProps)(TimeList)