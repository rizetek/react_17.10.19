//Components
import React from 'react';
import Message from './Message';
//Material-UI
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
//CSS
import '../styles/MessageField.css';

const botAnswers = ['Отстань, я робот', 'Кто такая Сири????!!!', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок' ];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages:[{ text: 'Привет! Я робот, напиши мне!', author: 'Робот'}],
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length 
            && this.state.messages[this.state.messages.length - 1].author === 'Я') {
            setTimeout(() => this.setState({ 'messages': [...this.state.messages, {text: randomChoice(botAnswers), author: 'Робот'}] }), 1000);
        }
    }

    handleSendMessage = () => {
        const { messages, input } = this.state;
        if(input.length !== 0){
            this.setState({ 
                'messages': [...messages, { text: input, author: 'Я'}],
                'input': ''
            });
        }        
    };
    
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    };

    handleKeyUp = (event) => {
        if(event.keyCode === 13){
            this.handleSendMessage();
        }
    }

    render() {
        const { messages, input } = this.state;
        const messageElements = messages.map(message => 
            <Message key = { message.text } text = { message.text } author = { message.author }/>);

        return (
            <div className='message-field'>
                <div>                    
                    { messageElements }
                </div>
                <TextField className='message-input' name='input' fullwidth={ true } hintText='Введите сообщение' onKeyUp={ this.handleKeyUp } onChange={ this.handleChange } value={ input }/>
                <FloatingActionButton onClick={ this.handleSendMessage }><SendIcon /></FloatingActionButton>
            </div>
        )
    }
}
