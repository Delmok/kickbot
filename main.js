import { WebSocket } from 'ws'; 
import events from 'events';

export const chat = new events();


const ws = new WebSocket('wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.4.0&flash=false');
ws.on('error', console.error);

export function connectToChat(channelID, chatroomsID) {
    
    ws.on('open', function open() {
        let data = JSON.stringify({"event":"pusher:subscribe", "data":{"auth":"", "channel": `channel.${channelID}`}});
        let data2 = JSON.stringify({"event":"pusher:subscribe","data":{"auth":"","channel":`chatrooms.${chatroomsID}`}});
        ws.send(data);
        ws.send(data2);
    });
}

ws.on('message', function message(data) {
    let events = JSON.parse(data);
    if(events.event != 'App\\Events\\ChatMessageSentEvent') return;
    chat.emit('messages', JSON.parse(events.data));
});