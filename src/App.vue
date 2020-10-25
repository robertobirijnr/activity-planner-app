<template>
  <div id="app">
   <div id="vueGoalApp">
        <nav class="navbar is-white topNav">
            <div class="container">
              <div class="navbar-brand">
                <h1>Activity Planner</h1>
                <h1>{{message}}</h1>
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
                  
                  <!-- <activity-item v-for="activity in activities" :key="activity.index" :activity="activity"></activity-item> -->
                </div>  
              </div>
            </div>
          </section>
      </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,body {
    font-family: 'Open Sans', serif;
    background: #F2F6FA;
  }
  footer {
    background-color: #F2F6FA !important;
  }
  .topNav {
    border-top: 5px solid #3498DB;
  }
  .topNav .container {
    border-bottom: 1px solid #E6EAEE;
  }
  .container .columns {
    margin: 3rem 0;
  }
  .navbar-menu .navbar-item {
    padding: 0 2rem;
  }
  aside.menu {
    padding-top: 3rem;
  }
  aside.menu .menu-list {
    line-height: 1.5;
  }
  aside.menu .menu-label {
    padding-left: 10px;
    font-weight: 700;
  }
  .button.is-primary.is-alt {
    background: #00c6ff;
    background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
    background: linear-gradient(to bottom, #0072ff, #00c6ff);
    font-weight: 700;
    font-size: 14px;
    height: 3rem;
    line-height: 2.8;
  }
  .media-left img {
    border-radius: 50%;
  }
  .media-content p {
    font-size: 14px;
    line-height: 2.3;
    font-weight: 700;
    color: #8F99A3;
  }
  article.post {
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #E6EAEE;
  }
  article.post:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  .menu-list li{
    padding: 5px;
  }
  
  .navbar-brand > h1 {
    font-size: 31px;
    padding: 20px;
  }


</style>
