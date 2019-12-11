import React, { Component } from 'react';
import LabelAndInput from '../common/form/LabelAndInput';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { init } from './timeActions'

class TimeForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' type='text'></Field>
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass} pull-right`}>
                        {this.props.submitLabel}</button>
                    <button type='button' className='btn btn-defalt pull-right' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
TimeForm = reduxForm({ form: 'timeForm', destroyOnUnmount: false })(TimeForm)
// const selector = formValueSelector('timeForm')

const mapStateToProps = (state) => ({ time: state.time })
const mapDispathToprops = dispatch => bindActionCreators({ init, }, dispatch)
export default connect(mapStateToProps, mapDispathToprops)(TimeForm)