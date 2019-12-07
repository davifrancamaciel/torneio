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

import { init } from './timeActions'

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
                            <TabContent id='tabCreate'></TabContent>
                            <TabContent id='tabUpdate'></TabContent>
                            <TabContent id='tabDelete'></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init
}, dispatch)
export default connect(null, mapDispatchToProps)(Time)
