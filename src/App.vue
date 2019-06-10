<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <input type="number" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        computed:{
          value: {
            get() {
              return this.$store.getters.value;
            },
            set( value ) {
              return this.$store.dispatch('updateValue', value);
            }
          }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
        }
    }
</script>
