<template>
    <v-flex xs12>
        <div class="hr">
            <label><h1><slot></slot></h1></label>
        </div>
    </v-flex>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
.hr {
  height: 50px;
  border-bottom: 1px solid grey;
  margin: 0 auto;
}
</style>


