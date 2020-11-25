<template>
    <div>
        <ActivityItemUpdate v-if="isUpdateActive"/>
        <ActivityItemDetail v-else
         :activity="activity"
          :categories="categories"
          @toggleUpdate="changeState"/>
    </div>
</template>

<script>
import ActivityItemDetail from './ActivityItemDetails'
import ActivityItemUpdate from './ActivityItemUpdate'
    export default {
        components:{
            ActivityItemDetail,
            ActivityItemUpdate
        },
        props:{
           activity:{
               required: true,
               type:Object
           } ,
           categories:{
               required: true,
               type:Object
           }
        },
        data() {
            return {
                isUpdateActive: false
            }
        },
        methods:{
            changeState(state){
                this.isUpdateActive = state
            }
        }
    }
</script>

<style  scoped>

</style>