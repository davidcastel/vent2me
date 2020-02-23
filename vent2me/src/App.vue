<template>
  <div id="app">
    <nav class="">
    <div class="nav-wrapper blue lighten-2 ">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/"><i class="Medium material-icons">find_in_page</i></a></li>
        <li><a href="/chats"><i class="Medium material-icons">question_answer</i></a></li>
        </ul>
    </div>
  </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
