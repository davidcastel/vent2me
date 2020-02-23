<template>
    <div class="msgbox container">
            <div class="card right">
            <div class="card-content" id="msg">
                <div class="card-title">Topic: Anxiety</div>
                
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        
                            <span class="teal-text">{{ message.name }}</span>
                        <div class="msg-box">
                            <span class="grey-text text-darken-3">{{ message.content }}</span>
                          </div>
                            <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <newmessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import newmessage from '@/components/newmessage'
import chat from '@/components/chat'
import db from '@/firebase/init'
import msgbox from '@/components/msgbox'
import moment from 'moment'

export default {
    name: 'chat',
    props: ['name'],
    components: {
        newmessage,
        msgbox
    },
    data(){
        return{
            messages: [],
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('LLL')
                    })
                }
            })
        })

    }
}
</script>
<style>
.create{
    margin-top: 50px;
    margin-bottom: 300px;

}
#rightpart{
    width: 80%
}
.create i{
    padding: 5px;
    border: 1px black solid;
}
</style>