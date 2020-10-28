<template>
<div>
    <article class="post">
    <h4 class="title">{{activity.title}}</h4>
    <p>{{categories[activity.category].text}}</p>
    <p>{{activity.note}}</p>
    <div class="media">
        <div class="media-left">
        <p class="image is-32x32">
            <img src="../assets/user.png">
        </p>
        </div>
        <div class="media-content">
        <div class="content">
            <p>
            <a href="#">Robert Obiri</a> updated {{activity.updatedAt}} minutes ago &nbsp;
            </p>
        </div>
        </div>
        <div class="media-right">
        <!-- <span>Progress: <span :class="'color-'+ activityProgress"> {{activity.progress}}%</span> </span> -->
        <span>Progress: <span :style="{'color': activityProgress}"> {{activity.progress}}%</span> </span>
        </div>
    </div>
    </article>
</div>
    
</template>

<script>
    export default {
        props:{
            activity:{
                type:Object,
                required:true
            },
            categories:{
                type:Object,
                required:true
            }
        },

        computed:{
              activityProgress() {
                const progress = this.activity.progress
                
                if (progress <= 0){
                    return 'red'
                }
                else if(progress <= 50){
                    return 'orange'
                }
                else{
                    return 'green'
                }
            }
        }
    }
</script>

<style  scoped>
.title{
    margin-bottom:5px
    }
    /* .color-red{
        color:red
    }
    .color-orange{
        color:orange
    }
    .color-green{
        color:green
    } */
</style>