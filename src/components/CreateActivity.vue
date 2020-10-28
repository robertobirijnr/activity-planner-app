<template>
    <div>
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
            <option v-for="category in categories" :value="category.id" :key="category.index">{{category.text}}</option>
            </select>
        </div>
        </div>
        <div class="field is-group">
        <div class="control">
            <button @click.prevent="createActivity" :disabled="!isFormValid" class="button is-link">Create</button>
            <button @click.prevent="ShowHideForm" class="button is-link">Cancel</button>
        </div>
        
        </div>
    </form>
    </div>
    </div>
</template>

<script>
import {createActivityAPI}  from '@/api'
    export default {

        props:{
            categories:{
                type:Object,
                required:true
            }
            },
        data() {
            return {
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
                return this.Newactivity.title && 
                this.Newactivity.note && 
                this.Newactivity.category
            }
        },
    methods: {
      ShowHideForm(){
        this.isDisplayForm = !this.isDisplayForm
      },
      resetActivity(){
          this.Newactivity.title ="",
          this.Newactivity.note ="",
          this.Newactivity.category =""
      },
      createActivity(){
         createActivityAPI({...this.Newactivity}).then(
             (activity)=>{
                 this.resetActivity()
                 this.isDisplayForm = false
                this.$emit('activityCreated', {...activity})
             }
         )
        
      }
    },
    
    }
</script>

<style lang="scss" scoped>

</style>