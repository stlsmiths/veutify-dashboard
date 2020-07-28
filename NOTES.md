# NOTES - Vue Mastery - Beautify with Veutify course

Course Video [Beautify with Veutify](https://www.vuemastery.com/courses/beautify-with-vuetify/getting-started-with-vuetify)

Their [GH Repo](https://github.com/Code-Pop/beautify-with-vuetify/tree/Lesson-1-BEGIN) 

[Veutify website](https://vuetifyjs.com/en/getting-started/quick-start/)

#### Lesson 1 - Getting Started

The lesson doesn't mention, but had to do the following to get mdi-icons working ( from [Veutify Docs](https://vuetifyjs.com/en/customization/icons/#icons))
```
$ npm install @mdi/font -D
add to veutify.js
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
```
That worked !

Prepend attributes with :type, for data or vm keyed items;  
`:type="showPassword ? 'text' : 'password'"`

#### Lesson 2 - Components (part 1)

Add navbar, `v-app-bar`, 

[Docs](https://vuetifyjs.com/en/components/app-bars/) show live example, props and slots.

[Application component](https://vuetifyjs.com/en/components/application/) and v-content component to adjust overflows

Add navbar, footer, "text rounded" to nav buttons to match footer.

#### Lesson 3 - Components (part 2)
Multi-page routing, more complex components          
[Video](https://www.vuemastery.com/courses/beautify-with-vuetify/components-part-2)  
[GH Lesson 3](https://github.com/Code-Pop/beautify-with-vuetify/tree/Lesson-3-BEGIN)   

vue add router ... kills our App.vue





