import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClassNumbers(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if (cols[0]) classes += `col-lg-${cols[0]}`
        if (cols[1]) classes += ` col-md-${cols[1]}`
        if (cols[2]) classes += ` col-sm-${cols[2]}`
        if (cols[3]) classes += ` col-xs-${cols[3]}`

        return classes;
    }
    render() {
        
        const gridClasses = this.toCssClassNumbers(this.props.cols || '12')
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}