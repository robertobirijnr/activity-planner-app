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
                <button v-if="!isDisplayForm" class="button is-primary is-block is-alt is-large" @click="ShowHideForm" >New Activity</button>
                <div v-if="isDisplayForm" class="create-form">
                  <h2>Create Activity</h2>
                <form action="">
                  <div class="field">
                    <div class="label">Title</div>
                    <div class="control">
                      <input type="text" v-model="Newactivity.title" class="input" placeholder="Read a Bok">
                    </div>
                  </div>
                  <div class="field">
                    <div class="label">Title</div>
                    <div class="control">
                      <textarea  class="textarea"  v-model="Newactivity.note" placeholder="add note"></textarea>
                    </div>
                  </div>
                  <div class="field">
                    <div class="label">Title</div>
                    <div class="control">
                     <select v-model="Newactivity.category" class="select">
                       <option disabled value="">Please select One</option>
                       <option v-for="category in categories" :key="category.index">{{category.text}}</option>
                     </select>
                    </div>
                  </div>
                  <div class="field is-group">
                    <div class="control">
                      <button @click="createActivity" :disabled="!isFormValid" class="button is-link">Create</button>
                      <button @click="ShowHideForm" class="button is-link">Cancel</button>
                    </div>
                   
                  </div>
                </form>
                </div>
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
import ActivityItem from '@/components/ActivityItem'
import {fetchActivities, fetchUsers,fetchCategories} from '@/api'
export default {
  components:{
    ActivityItem
  },
  data() {
      return {
        appName:"Activity Planner",
        creator:"Robert",
          user: { },
          activities: {},
          categories: {},
          isDisplayForm:false,
          Newactivity:{
            title:"",
            note:"",
            category:""
          }
      }
  },
  computed:{
    isFormValid(){
      return this.Newactivity.title && this.Newactivity.note
    },
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
  
   methods: {
      ShowHideForm(){
        this.isDisplayForm = !this.isDisplayForm
      },
      createActivity(){
        alert(this.Newactivity)
      }
    },
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