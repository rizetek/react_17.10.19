import React from 'react';
import PropTypes from 'prop-types';
//CSS
import '../styles/Message.css';

export default class Message extends React.Component {
    /*static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };*/
    state = {
        time: new Date().toLocaleTimeString().substr(0, 5)
    };
 

    render() {
        let className = 'message';
        if(this.props.author !== 'Я'){
            className += ' message-bot';
        }else{
            className += ' message-me';
        }

        return (
            <div className={ className }>
                    <div className='message-field-gray'>{ this.props.author }</div>
                    <div>{ this.props.text }</div>
                    <div className='message-field-gray message-time'>{ this.state.time }</div>
            </div>
        )
    }
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}
