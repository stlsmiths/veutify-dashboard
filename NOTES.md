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

