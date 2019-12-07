import React, { Component } from 'react'
import logo from '../../../assets/img/logo.png'

export default class Footer extends Component {

    currentYear() {
        return new Date().getFullYear()
    }

    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <div className="pull-right alt-margem-left-20">
                        <a href="" target="_blank">
                            <img src={logo} />
                        </a>
                    </div>
                </div>
                © {this.currentYear()} Desenvolvido por <strong> D<span className='text-danger'>@</span>vi</strong>
            </footer>
        )
    }
}