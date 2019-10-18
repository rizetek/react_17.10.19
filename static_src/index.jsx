import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

const messages = ['Привет!', 'Как дела?'];

const Message = (props) => <div className="message">{ props.text }</div>;

const MessageField = (props) => <div>
    <h1>Чат</h1>
    { props.messages.map(message => <Message text={ message } />) }
</div>;

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);
