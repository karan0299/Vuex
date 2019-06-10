<template>
<div>
    <p>Counter is: {{ doubleResult }}</p>
    <p>Clicks is: {{ stringCounter }}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        computed : {
            ...mapGetters([
               'doubleResult',
             'stringCounter'
            ])
        }
    }
</script>