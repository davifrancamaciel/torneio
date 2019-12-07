import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='/' icon='dashboard' label='Dashboard' />
        <MenuItem path='/time' icon='circle-o' label='Times' />
        <MenuItem path='/jogador' icon='circle-o' label='Jogadores' />
        <MenuTree icon='list' label='Cadastro'>
            <MenuItem path='/time' icon='circle-o' label='Times' />
        </MenuTree>
    </ul>
)
