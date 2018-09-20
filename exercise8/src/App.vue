<template>
    <div class="container">
        <div>
            <div>
                <b>Exercise 1</b>
                <p>Create a Signup Form where you retrieve the following Information</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Mail</p>
                <p>Password</p>
                <p>Store Data? Yes/No</p>

                <div v-show="showOrNot" class="container" style="padding-top: 50px;">
                  <form class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                      <div class="row">
                          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                              <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  class="form-control"
                                  v-model="userData.firstName">
                              </div>
                              <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input
                                  type="text"
                                  id="lastName"
                                  class="form-control"
                                  v-model="userData.lastName">
                              </div>
                              <div class="form-group">
                                <label for="email">Mail</label>
                                <input
                                  type="text"
                                  id="email"
                                  class="form-control"
                                  v-model="userData.email">
                              </div>
                              <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                  type="password"
                                  id="password"
                                  class="form-control"
                                  v-model.lazy="userData.password">
                              </div>
                              
                              <label for="yes">Store in Database?
                                <input
                                  type="radio"
                                  id="yes"
                                  value="yes"
                                  v-model="storeData"> yes
                              </label>
                              <label for="no">
                                <input
                                        type="radio"
                                        id="no"
                                        value="no"
                                        v-model="storeData"> no
                              </label>
                          </div>
                      </div>
                      
                      <hr>
                      <div class="row">
                          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                              <button
                                      class="btn btn-primary"
                                      @click.prevent="submitForm" @click="showOrNot = !showOrNot">Submit
                              </button>
                          </div>
                      </div>
                  </form>
              </div>

                <b>Exercise 2</b>
                <p>Only display the Form if it has NOT been submitted</p>
                <p>Display the Data Summary ONCE the Form HAS been submitted</p>

                <b>Exercise 3</b>
                <p>Edit the Example from above and create a custom "Full Name" Control</p>
                <p>which still holds the First Name and Last Name Input Field</p>
            </div>
        </div>
        <hr>
        <div v-show="!showOrNot" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>First Name: {{userData.firstName}}</p>
                        <p>Last Name:  {{userData.lastName}}</p>
                        
                        Full Name: <span><FullNameComp  :fullname="{'fname':userData.firstName, 'lname':userData.lastName}"></FullNameComp></span>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   import FullNameComp from "./FullNameComp.vue";

export default {
    components: {
    FullNameComp: FullNameComp,
  },
   data() {
    return {
      showOrNot: true,
      userData: {
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        storeData: "",
      },
      
    };
  },
  methods: {
      submitForm() {
          this.isSubmitted = true;
      }
  }
};
</script>

<style>
</style>
