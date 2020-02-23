<template>
    <div class="new-post">
        <div class="card">
            <div class="card-content">
                <span class="card-title">Start Venting</span>
                <form @submit.prevent="addPost">
                    <label for="new-post">Speak what's on your mind:</label>
                    <input type="text" name="new-post" v-model="newPost">
                    <p class="red-text" v-if="feedback"> {{feedback}}</p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import db from '@/firebase/init'

export default {
    name: 'newpost',
    data(){
        return{
            newPost: null,
            feedback: null,
        }
    },
    methods: {
        addPost(){
           if(this.newPost){
               db.collection('posts').add({
                   content: this.newPost,
                   timestamp: Date.now()
               })
               this.newPost = null
           }else{
               this.feedback = "You must Enter Post."
           }
        }
    }
}
</script>