import React from 'react'
import Grid from '../layout/Grid';

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control'
                placeholder={props.placeholder}
                type={props.type}
                readOnly={props.readOnly}
            ></input>
        </div>
    </Grid>
)