<template>
   <div id="vueGoalApp">
        <nav class="navbar is-white topNav">
            <div class="container">
              <div class="navbar-brand">
                <h1>{{fullAppName}}</h1>
                
              </div>
            </div>
          </nav>
          <nav class="navbar is-white">
            <div class="container">
              <div class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item is-active" href="#">Newest</a>
                  <a class="navbar-item" href="#">In Progress</a>
                  <a class="navbar-item" href="#">Finished</a>
                </div>
              </div>
            </div>
          </nav>
          <section class="container">
            <div class="columns">
              <div class="column is-3">
               <CreateActivity @activityCreated="addActivity" :categories="categories"/>
              </div>
              <div class="column is-9">
                <div class="box content">
                  <ActivityItem  :activities="activities"></ActivityItem>
                  <div class="activity-length">Currently {{activityLength}} activities</div>
                  <!-- <div class="activity-motivation">{{activitiesMotivation}}</div> -->
                </div>  
              </div>
            </div>
          </section>
      </div>
</template>

<script>
import Vue from 'vue'
import ActivityItem from '@/components/ActivityItem'
import CreateActivity from '@/components/CreateActivity'

import {fetchActivities, fetchUsers,fetchCategories} from '@/api'
export default {
  components:{
    ActivityItem,
    CreateActivity
  },
  data() {
      return {
        appName:"Activity Planner",
        creator:"Robert",
          user: { },
          activities: {},
          categories: {},
         
      }
  },
  computed:{
    fullAppName(){
      return this.appName  +  ' by ' + this.creator
    },
    activityLength(){
      return Object.keys(this.activities).length
    },
    // activitiesMotivation(){
    //    if(this.activitiesMotivation && this.activitiesMotivation < 5){
    //      return "nice motivation"
    //    }else if(this.activitiesMotivation && this.activitiesMotivation >= 5){
    //      return "So many motivation"
    //    }else{
    //      return 'No activities, so sad :('
    //    }
    // }
  },

  created(){
   this.activities = fetchActivities()
   this.user = fetchUsers()
   this.categories = fetchCategories()
  },
  methods:{
    addActivity(newActivity){
      Vue.set(this.activities,newActivity.id,newActivity)
      // this.activities[newActivity.id] = newActivity
    }
  }
   
}
</script>

<style scoped>
  .activity-length{
    display:inline-block
  }
  .activity-motivation{
    float:right
  }
</style>