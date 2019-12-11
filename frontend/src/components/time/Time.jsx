import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from '../common/tab/TabHeader';
import TabContent from '../common/tab/TabContent';
import List from './TimeList'
import Form from './TimeForm';


import { init, create, update, remove } from './timeActions';

class Time extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Time' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' target='tabList' icon='bars' />
                            <TabHeader label='Incluir' target='tabCreate' icon='plus' />
                            <TabHeader label='Alterar' target='tabUpdate' icon='edit' />
                            <TabHeader label='Excluir' target='tabDelete' icon='trash-o' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form submitClass='primary' submitLabel='Incluir' onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitClass='info' submitLabel='Alterar' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} submitClass='danger' submitLabel='Excluir' readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(Time)
