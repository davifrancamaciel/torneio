import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList } from './timeActions';



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
                    {/* <button className='btn btn-warning'
                        onClick={() => this.props.showUpdate(item)}>
                        <i className='fa fa-pencil'></i>
                    </button>

                    <button className='btn btn-danger'
                        onClick={() => this.props.showDelete(item)}>
                        <i className='fa fa-trash-o'></i>
                    </button> */}
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
const mapDsipatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDsipatchToProps)(TimeList)