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
_[Note: after the fact, I filed an issue and the author checked it and couldn't replicate.  I
subseqeuntly re-built a new project and icons worked fine, so clearly my error somewhere]_

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
 * EmployeesTable is 2/3 of row width  ( hint: use `cols="8"`)
 * EventTimeline is 1/3 of row width 
 
#### Lesson 5 - Layouts : Responsive Design

[Video] https://www.vuemastery.com/courses/beautify-with-vuetify/layouts-responsive-design

Responseive design ... i.e. think Mobile!

Veutify calls them "breakpoints", (xs,sm,md,lg,xl)

Apply breakpoints to `v-col`.

Lesson design reqmts:
 * SalesGraph width 
   * mobile:  100% wide
   * tablet >:  1/3 wide
 * Desktop devices:  Snackbar position on left

Adding `cols="12" md="4"` fixes the SalesGraph issue.

Snackbar positioning:

@5:32 he shows all the JS code required to manually determine the
device size and position left or center.

Can use `$vuetify.breakpoint.lgAndUp` as boolean to toggle `:left` flag 
on Snackbar ... really sweet !!👍🏼

*Extra Credit:*
Design Reqmts:
 * Mobile:  all components 100%
 * Tables >:
    * StatisticCard 1/2
    * EmployeesTable 2/3
    * EventTimeline 1/3
 * desktop >
    * StatisticCard 1/4

Basically - anywhere you define a md="6" or lg="3" you must have a cols="12" also

#### Lesson 6 - Forms : Fundamentals

Build SignUp page and use form elements.

[Autocomplete](https://vuetifyjs.com/en/components/autocompletes/#autocompletes)

[file input](https://vuetifyjs.com/en/components/file-inputs/#file-inputs)  pretty nice

[date picker](https://vuetifyjs.com/en/components/date-pickers/)
 * how to show picker on focus or modal  ( see [doc examples](https://vuetifyjs.com/en/components/date-pickers/#examples)  )
 * bind to a v-model

Agree to T&C's ... checkbox and add Submit button

#### Lesson 7 - Forms : Validation

Form validation ... "all input components have a 'rules' prop that includes an array to validate results"

Validation: 
 * define the vm as data.itemname
 * define rules as array of arrow functions in data
 * rules automatically render below control after focus if not met
 
@5:32 ... good email rules, pretty comprehensive

[Reset forms](https://vuetifyjs.com/en/components/forms/#validation-with-submit-clear) .. also reset validation

To reference the form, use `this.$refs`.

Reference the form as `this.$refs.formName.reset()`

Validity of form, the v-form has a props of `value` and `validate`

Can run `this.$refs.formName.validate()` to run form validation at any moment.

Q: Not sure if basic Vuetify includes form "dirty" or "pristine" state ?
 * Look into [vuelidate](https://vuelidate.js.org/#getting-started) which seems to have $dirty props for whole form
 * OR [VeeValidate](https://logaretm.github.io/vee-validate/)  

[Final GH this lesson](https://github.com/Code-Pop/beautify-with-vuetify/tree/Lesson-7-FINISH)

#### Lesson 8 - Directives

[Video](https://www.vuemastery.com/courses/beautify-with-vuetify/directives)

Standard directives  ...[resize](https://vuetifyjs.com/en/directives/resizing/)

Write a custom directive.

Content "below the fold .... ", 'v-intersect', "skeleton loader"

[intersection observer docs](https://vuetifyjs.com/en/directives/intersect/#intersection-observer)

@6:16 mutation observer directives, v-scroll  

`v-touch` swipes and similar

#### Lesson 9 - Themes

Themes ... [Vue Theme docs](https://vuetifyjs.com/en/customization/theme/)

Dark theme toggling ... anchor color defaults.

@5:47 Sass usage, create /sass folder.
 * update public/index.html ... replace font
 * define fonts in scss/variables.scss file  ( see [Docs](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_variables.scss) )
 * restart server ... changes require restart

[Final author GH](https://github.com/Code-Pop/beautify-with-vuetify/tree/Lesson-9-END) 
 







