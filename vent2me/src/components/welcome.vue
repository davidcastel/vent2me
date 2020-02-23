
<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <form @submit.prevent="enterChat">
          <span class="card-title">Create Post</span>
          <input placeholder="Enter your name" type="text" class="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
        </form>
      </div>
    </div>

  <div class="feed">
    <ul style="position:relative;">
      <li>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Robin<a class=" green right btn" href="#"><i class="material-icons center">arrow_forward</i></a></span>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis incidunt commodi laborum hic praesentium, ex rerum dolorem minus adipisci quaerat autem consequuntur aliquam maiores aperiam error est saepe neque!</p>
          </div>
        </div>
      </li>
        
      <li>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Jeff<a class=" green right btn" href="#"><i class="material-icons center">arrow_forward</i></a></span>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis incidunt commodi laborum hic praesentium, ex rerum dolorem minus adipisci quaerat autem consequuntur aliquam maiores aperiam error est saepe neque!</p>
          </div>
        </div>
      </li>

       <li>
        <div class="card">
          <div class="card-content">
            <span class="card-title">James<a class=" green right btn" href="#"><i class="material-icons center">arrow_forward</i></a></span>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis incidunt commodi laborum hic praesentium, ex rerum dolorem minus adipisci quaerat autem consequuntur aliquam maiores aperiam error est saepe neque!</p>
          </div>
        </div>
      </li>

      <li>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Poko<a class=" green right btn" href="#"><i class="material-icons center">arrow_forward</i></a></span>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis incidunt commodi laborum hic praesentium, ex rerum dolorem minus adipisci quaerat autem consequuntur aliquam maiores aperiam error est saepe neque!</p>
          </div>
        </div>
      </li>

      <li>
        <div class="card">
          <div class="card-content">
            <span class="card-title">Kevin<a class=" green right btn" href="#"><i class="material-icons center">arrow_forward</i></a></span>
            <hr>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis incidunt commodi laborum hic praesentium, ex rerum dolorem minus adipisci quaerat autem consequuntur aliquam maiores aperiam error est saepe neque!</p>
          </div>
        </div>
      </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      name: null,
      feedback:null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'chat', params: { name: this.name }})
      }else{
        this.feedback = "You must enter a name"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.feed{
  max-width: 1000px;
  max-height: 400px;
}
.search{
  height: 50px;
}
.welcome{
  margin-top: 50px;
  max-width: 800px;
  height: auto;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
</style>
