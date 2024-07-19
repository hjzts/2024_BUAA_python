<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              height="200px"
            ></v-img>
            <v-card-text>
              <div class="text-h5">
                This is a title
              </div>
              <div>
                This is some text inside the card. It can be a description or any other content.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
  };
  </script>
  
  <style>
  /* You can add custom styles here */
  </style>