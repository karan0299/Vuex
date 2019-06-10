<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, time: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, time: 500 })">Decrement</button>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex'

//     export default {
//         methods: {
//             ...mapMutations([
//                 'increment',
//                 'decrement'
//             ])
//         }
//     }
import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
            // asyncIncrement(paylaod){
            //     this.$store.dispatch(' asyncIncrement', payload);
            // }
        }
    }

</script>