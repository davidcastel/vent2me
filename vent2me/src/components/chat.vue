<template>
    <div class="chat container">
        <div class="card left">
            <div class="card-content" id="open">
                <ul class="collection">
                    <li class="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" class="circle">
                    <span class="title">Anonymous 1</span>
                    <a href="#!" class="btn waves-effect waves-teal right"><i class="material-icons">chevron_right</i></a>
                    <i class="material-icons blue circle">person</i>
                    <p class="green-text">Online<br>
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                    <li class="collection-item avatar">
                    <i class="material-icons circle">person</i>
                    <span class="title">Anonymous 2</span>
                    <p class="grey-text">Offline <br>
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                    <li class="collection-item avatar">
                    <i class="material-icons circle green">person</i>
                    <span class="title">Anonymous 3</span>
                    <p class="orange-text">Away <br>
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                    <li class="collection-item avatar">
                    <i class="material-icons circle red">person</i>
                    <span class="title">Anonymous 4</span>
                    <p class="grey-text">Offline <br>
                        
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                    
                    <li class="collection-item avatar">
                    <i class="material-icons circle orange">person</i>
                    <span class="title">Anonymous 5</span>
                    <p class="grey-text">Offline <br>
                        
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>

                    <li class="collection-item avatar">
                    <i class="material-icons circle purple">person</i>
                    <span class="title">Anonymous 6</span>
                    <a href="#!" class="btn waves-effect waves-teal right"><i class="material-icons">chevron_right</i></a>
                    <p class="green-text">Online
                        <br>
                        
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                </ul>
            </div>

        </div>
        

        <div class="card right">
            <div class="card-content" id="msg">
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
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'chat',
    props: ['name'],
    components: {
        newmessage
    },
    data(){
        return{
            messages: []
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
#msg{
    width: 600px;
}
#open{
    width: 375px;
}
.chat{
    margin-top: 25px;
    margin-bottom: 700px;
}
.chat h2{
    font-size: 2.6em;
    
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
.messages{
    max-height: 390px;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width: 3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
.msg-box{
    width: 97%;
    padding: 10px;
    background: #eee;
    font-size: 11px;
    border-radius: 2px;
}
</style>