import {connectToChat, chat} from './main.js';


chat.on('messages', function (data){
    console.log(data);
})

connectToChat(1240760, 1233753);