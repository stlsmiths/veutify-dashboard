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

vue add router ... kills our App.vue!, have to revert to git commit

add `Login`component, move App.vue stuff there (showPassword).  Add to router
as lazy loaded route.  Add `<router-view>` to App.vue.
Fix v-btn to use `to="""` for router linking  
Update navbar / footer to use `links` array for consistency.

Add `Dashboard` as main component (using Datatable, get user data from the docs).

[Vuetify Datatables](https://vuetifyjs.com/en/components/data-tables/)  
Attributes are `:headers and :items`.

@10:49 Row click handling  
add [v-snackbar component](https://vuetifyjs.com/en/components/snackbars/#snackbars)  

Datatable `@click:row` passes row data as event.

Extra Credit:
 * use data/employee db as new data ( downoad from repo )
 * enable multi-column sorting
 * change snackbar to show employee name  / title on click
 
To add a "formatter" to a column, you use a v-slot ...like
``` 
<template v-slot:item.salary="{item}>
  $ {{ item.salary }}
</template>
```        
See y implementation at [Line](https://github.com/stlsmiths/veutify-dashboard/blob/master/src/views/Dashboard.vue#L13)

I also added a Vue filter to format as currency.

#### Lesson 4 - Layouts : Grid System 

Wrap content in `v-container`, then `v-row` and inner `v-col`  
Same grid system as Bootstrap, 12 units wide
add attribute `cols="8"` for example

Can use `v-spacer` to occupy empty column space

Part 1 Design Reqmts ( desktop devices )
 * all SalesGraphs in single row
 * each SalesGraph is 1/3 of row width
 * All StatisticCard in a single row
 * each StatisticCard is 1/4 of row width 

Easy peasy - just wrap SalesGraph and StatisticCard in `v-row` and `v-col` and put v-for and :key 
on `v-col`

Part 2 Design reqmt ( desktop devices )
 * EmployeesTable + EventTimeline should be same row
 * EmployeesTable is 2/3 of row width
 * EventTimeline is 1/3 of row width
 
 


#### Lesson 5 - Layouts : Responsive Design

#### Lesson 6 - Forms : Fundamentals

#### Lesson 7 - Forms : Validation

#### Lesson 8 - Directives

#### Lesson 9 - Themes




