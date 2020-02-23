<template>
    <div class="create container">
        <div class="card left">
            <div class="card-content">
                <i class="material-icons purple lighten-4 large circle">person_outline</i>
            </div>
        </div>
        <div id="rightpart" class="card right">
            <div class="card-content">
                <div class="card-title">Journal</div>
                <hr>
                <input type="text" name="new-post">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
           
        }
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