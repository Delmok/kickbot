# kickbot
Simple kick.com chat bot.

install:
```rb
    npm i kickchatbot
```

todo:

- [x] read messages live from chat
- [ ] send messages to chat

How to use:

```rb
import {connectToChat, chat} from 'kickchatbot';


chat.on('messages', function (data){
    console.log(data);
})
//Channel ID - Chatrooms ID
connectToChat(1240760, 1233753);
```
