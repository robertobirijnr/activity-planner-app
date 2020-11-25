<template>
<div>
    <article class="post">
    <div class="activity-title-wrapper">
        <h4 class="activity-title">{{activity.title}}</h4>
        <i class="fas fa-cog activity-settings" @click="isMenuDisplay = !isMenuDisplay"></i>
    </div>
    <p>{{capitalize(categories[activity.category].text)}}</p>
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
            <a href="#">Robert Obiri</a> updated {{activity.updatedAt | timeformat}} &nbsp;
            </p>
        </div>
        </div>
        <div class="media-right">
        <!-- <span>Progress: <span :class="'color-'+ activityProgress"> {{activity.progress}}%</span> </span> -->
        <span>Progress: <span :style="{'color': activityProgress}"> {{activity.progress}}%</span> </span>
        </div>
    </div>
    </article>
    <div v-if="isMenuDisplay" class="activity-control">
        <a @click="$emit('toggleUpdate',true)" class="button is-warning">Edit</a>
        <a @click="handleDelet" class="button is-danger">Delete</a>
    </div>
</div>
    
</template>

<script>
import textUtility from "@/mixins/textUtility"
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
        data() {
            return {
                isMenuDisplay: false
            }
        },
        mixins:[textUtility],
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
        },
        methods:{
            handleDelet(){
                this.$emit('activityDeleted',this.activity)
            }
        }
    }
</script>

<style   scoped>
.title{
    margin-bottom:5px
    }
.activity-title{
    margin-bottom:5px;
    display:inline-block
}    
.activity-settings{
    float:right;
    font-size: 22px;

    /* &:hover{
        cursor:pointer;
    } */
}
.activity-settings:hover{
     cursor:pointer;
}

.activity-control{
    margin:20px 0 0 0;

    /* a{
        margin-right: 5px;
    } */
}

.activity-control a{
        margin-right: 5px;
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