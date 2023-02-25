# kickbot
Simple kick.com chat bot.

todo:

[x] read messages live from chat
[ ] send messages to chat

How to use:

```rb
import {connectToChat, chat} from './main.js';


chat.on('messages', function (data){
    console.log(data);
})

connectToChat(1240760, 1233753);
```