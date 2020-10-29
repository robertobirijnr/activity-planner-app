<template>
   <div  v-if="isDataloaded" id="vueGoalApp">
        <nav class="navbar is-white topNav">
            <div class="container">
              <div class="navbar-brand">
                <h1>{{fullAppName}}</h1>       
              </div>
            </div>
          </nav>
         <Navbar />
          <section class="container">
            <div class="columns">
              <div class="column is-3">
               <CreateActivity @activityCreated="addActivity" :categories="categories"/>
              </div>
              <div class="column is-9">
                <div class="box content "
                :class="{fetching:loading,' has-error':error}">
                <div v-if="error">
                  {{error}}
                </div>
                <div v-else>
                  <div v-if="loading">Loading...</div>
                  <ActivityItem 
                   v-for="activity in activities"
                  :key="activity.id"
                  :activity="activity"
                  :categories="categories"
                  @activityDeleted="handleActivityDeleted"
                  />
                  <!-- <ActivityItem  :activities="activities"></ActivityItem> -->
                </div>
                  <div v-if="!loading">
                    <div class="activity-length">Currently {{activityLength}} activities</div>
                  <div class="activity-motivation">{{activitiesMotivation}}</div>
                  </div>
                  
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

import {fetchActivities, fetchUsers,fetchCategories,deleteActivityAPI} from '@/api'
import Navbar from '@/components/Navbar'
export default {
  components:{
    ActivityItem,
    CreateActivity,
    Navbar 
  },
  data() {
      return {
        appName:"Activity Planner",
        creator:"Robert",
        loading:false,
         error:"",
          user: { },
          activities: null,
          categories: null,
         
      }
  },
  computed:{
    fullAppName(){
      return this.appName  +  ' by ' + this.creator
    },
    activityLength(){
      return Object.keys(this.activities).length
    },
    activitiesMotivation(){
       if(this.activityLength && this.activityLength < 5){
         return "nice motivation"
       }else if(this.activityLength && this.activityLength >= 5){
         return "So many motivation"
       }else{
         return 'No activities, so sad :('
       }
    },
    isDataloaded(){
      return this.categories && this.activities
    }
  },

  created(){
    this.loading = true
    fetchActivities().then(activities =>{
      this.activities = activities
      this.loading = false
    }).catch(err=>{
      this.loading = false
      this.error = err
    })
   this.user = fetchUsers()
    fetchCategories().then(result =>{
     this.categories = result
   })
  },
  methods:{
    addActivity(newActivity){
      Vue.set(this.activities,newActivity.id,newActivity)
      // this.activities[newActivity.id] = newActivity
    },
    handleActivityDeleted(activity){
      deleteActivityAPI(activity)
      .then(deleteactvity=>{
        Vue.delete(this.activities, deleteactvity.id)
      })
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
  .fetching{
    border: 2px solid orange;
  }
  .has-error{
    border:2px solid red
  }
</style>