import React from 'react';
import { Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
//CSS
import '../styles/ChatList.css';

export default class ChatList extends React.Component {
    
    render() {
        return (
            <List className='chat-list'>
                <Link to="/chat/1/">
                    <ListItem primaryText="Чат 1" leftIcon={<ContentSend />} />
                </Link>
                <Link to="/chat/2/">
                    <ListItem primaryText="Чат 2" leftIcon={<ContentSend />} />
                </Link>
                <Link to="/chat/3/">
                    <ListItem primaryText="Чат 3" leftIcon={<ContentSend />} />
                </Link>
            </List>
        )
    }
}

