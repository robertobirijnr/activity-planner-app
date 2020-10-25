<template>
   <div id="vueGoalApp">
        <nav class="navbar is-white topNav">
            <div class="container">
              <div class="navbar-brand">
                <h1>Activity Planner</h1>
                
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
                  <div class="field is-group">
                    <div class="control">
                      <div @click="createActivity" class="button is-link">Create</div>
                      <button @click="ShowHideForm" class="button is-link">Cancel</button>
                    </div>
                   
                  </div>
                </form>
                </div>
              </div>
              <div class="column is-9">
                <div class="box content">
                  <ActivityItem  :activities="activities"></ActivityItem>

                  
                </div>  
              </div>
            </div>
          </section>
      </div>
</template>

<script>
import ActivityItem from '@/components/ActivityItem'
import {fetchActivities} from '@/api'
export default {
  components:{
    ActivityItem
  },
  data() {
      return {
          message:"Hello Bob",
          items: {1: {name: 'Bob'}, 2: {name: 'Jeff'}},
          user: {
              name: 'Bob Alaska',
              id: '-Aj34jknvncx98812',
          },
          activities: { },
          categories: {
              '1546969049': {text: 'books'},
              '1546969225': {text: 'movies'}
          },
          isDisplayForm:false,
          Newactivity:{
            title:"",
            note:""
          }
      }
  },
  created(){
   this.activities = fetchActivities()
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