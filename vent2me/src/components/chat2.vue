<template>
    <div class="chat2 container">
        <div class="card left">
            <div class="card-content" id="open">
                <ul class="collection">
                    <li class="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" class="circle">
                    <span class="title">Anonymous 1</span>
                    <a href="/chats" class="btn-floating waves-effect waves-teal right"><i class="material-icons">chevron_right</i></a>
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
                    <a href="/chat2" class="btn-floating waves-effect waves-teal right"><i class="material-icons">chevron_right</i></a>
                    <p class="green-text">Online
                        <br>
                        
                    </p>
                    <a href="#!" class="secondary-content"></a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="right">
    <msgbox2 class="right" />
    </div>




    </div>
</template>

<script>
import newmessage from '@/components/newmessage'
import msgbox from '@/components/msgbox'
import msgbox2 from '@/components/msgbox2'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'chat2',
    props: ['name'],
    components: {
        newmessage,
        msgbox,
        msgbox2
    },
    data(){
        return{
            messages: [],
            messages2: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')
        let ref2 = db.collection('messages2').orderBy('timestamp')

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
        }),
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
#msg{
    width: 600px;
}
#open{
    width: 375px;
}
.chat2{
    margin-top: 25px;
    margin-bottom: 700px;
}
.chat2 h2{
    font-size: 2.6em;
    
}
.chat2 span{
    font-size: 1.4em;
}
.chat2 .time{
    display: block;
    font-size: 0.8em;
}
.messages2{
    max-height: 390px;
    overflow: auto;
}
.messages2::-webkit-scrollbar{
    width: 3px;
}
.messages2::-webkit-scrollbar-track{
    background: #ddd;
}
.messages2::-webkit-scrollbar-thumb{
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