<template>
  <div id="app">
    <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Talk</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="collapsible.html">Your Chats</a></li>
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
