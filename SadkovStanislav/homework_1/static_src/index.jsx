import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];
//Переменная для сообщения
let message = '';

//Добавляем сообщение при нажатии кнопки и обновляем компонент
const AddMessage = () => {
   messages.push(message);
   ReactDOM.render(
      <MessageField messages={ messages } />,
      document.getElementById('root'),
   );
}

const MessageComponent = (props) => <div>{props.text}</div>;

//Меняем значение глобальной переменной message
const SetMessage = (event) => {
   const msg = event.target.value;
   message = msg;
}

const MessageField = (props) => <div>
   {props.messages.map(message => <MessageComponent text={ message } />)}
   <input onChange = {SetMessage}/>
   <button onClick = {AddMessage} >Send</button>
   </div>
;

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);