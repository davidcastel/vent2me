<template>
    <div class="msgbox2 container">
            <div class="card right">
            <div class="card-content" id="msg">
                <div class="card-title">Topic: Trust</div>
                <ul class="messages2" v-chat-scroll>
                    <li v-for="message2 in messages2" :key="message2.id">
                        
                            <span class="teal-text">{{ message2.name }}</span>
                        <div class="msg-box">
                            <span class="grey-text text-darken-3">{{ message2.content }}</span>
                          </div>
                            <span class="grey-text time">{{ message2.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <newmessage2 :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import newmessage2 from '@/components/newmessage2'
import chat from '@/components/chat'
import db from '@/firebase/init'

import moment from 'moment'

export default {
    name: 'chat',
    props: ['name'],
    components: {
        newmessage2,
        chat
        
    },
    data(){
        return{
            messages2: []
        }
    },
    created(){
        let ref2 = db.collection('messages2').orderBy('timestamp')

        ref2.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages2.push({
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