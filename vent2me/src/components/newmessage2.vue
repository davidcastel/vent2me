<template>
    <div class="new-message2">
        <form @submit.prevent="addMessage2">
            <label for="new-message2">New Message</label>
            <input type="text" name="new-message2" v-model="newMessage2">
            <p class="red-text" v-if="feedback"> {{feedback}}</p>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'

export default {
    name: 'newMessage2',
    props: ['name'],
    data(){
        return{
            newMessage2: null,
            feedback: null
        }
    },
    methods: {
        addMessage2(){
            if(this.newMessage2){
                db.collection('messages2').add({
                    content: this.newMessage2,
                    name: 'You',
                    timestamp: Date.now()
                }).catch(err =>{
                    console.log(err)
                })
                this.newMessage2 = null
                this.feedback = null
            }
        }
    }
}
</script>