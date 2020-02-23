
<template>
  <div class="welcome container">
    
<newpost />
  <div class="feed">
    <ul>
      <li v-for="posts in posts" :key="posts.id" >
        <div class="card">
          <div class="card-content">
            <span class="card-title">{{posts.content}}</span>
            <hr>
            <a class=" green right btn" href="/chats"><i class="material-icons center">chat</i></a>
            <label for="new-post">{{posts.timestamp}}</label>
          </div>
        </div>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import newpost from '@/components/newpost'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'welcome',
  components: {
    newpost
  },
  data () {
    return {
      name: 'Anon',
      feedback:null,
      posts: []
    }
  },
  created(){
    let ref = db.collection('posts').orderBy('timestamp', 'desc')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change =>{
        if(change.type == 'added'){
          let doc = change.doc
          this.posts.push({
            id: doc.id,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('LLL')
          })
        }
      })
    })
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'chat', params: { name: this.name }})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.feed{
  max-width: 1000px;
  max-height: 500px;
}
.search{
  height: 50px;
}
.welcome{
  padding: 5px;
  margin-top: 20px;
  max-width: 800px;
  max-height: 600px;
  overflow-x: visible;
  overflow-y: auto;
  margin-bottom: 50px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
.welcome::-webkit-scrollbar{
    width: 3px;
}
.welcome::-webkit-scrollbar-track{
    background: #ddd;
}
.welcome::-webkit-scrollbar-thumb{
    background: #aaa;
}
</style>
