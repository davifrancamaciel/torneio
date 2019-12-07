import React, { Component } from 'react';
import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';

class Jogador extends Component {

    render() {
        return (
            <div>
                <ContentHeader title='Jogador' />
                <Content>
                    Jogador
                </Content>
            </div>
        )
    }
}

export default Jogador
