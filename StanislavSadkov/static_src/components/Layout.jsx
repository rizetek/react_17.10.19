import React from 'react';
import MessageField from './MessageField';
import { AppBar } from 'material-ui';
import ChatList from './ChatList';
import PropTypes from 'prop-types';
//CSS
import '../styles/Layout.css';


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        const chatName = 'Чат ' + this.props.chatId;

        return (
            <div className="layout">
                <AppBar title={ chatName } showMenuIconButton={ false } />
                <ChatList/>
                <MessageField />
            </div>
        )
    }
}