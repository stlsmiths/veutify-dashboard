<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
        multi-sort
        dense 
      :headers="empHeaders"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
    >
      <template
        v-slot:item.salary="{item}"
      >$ {{ item.salary | currency }}</template>
    </v-data-table>
    <v-snackbar
      v-model="snackbar"
    >
      You selected: [ {{ snackbarText }} ]
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import employees from '@/data/employees.json'
  export default {
    data () {
      return {
        snackbar: false,
        snackbarText: 'Hello, I\'m a snackbar',
        employees: employees,
        empHeaders: [
          {
            text: 'Emp ID',
            value: 'id',
            sortable: true
          },
          {
            text: 'Name',
            value: 'name',
            sortable: true
          },
          {
            text: 'Title',
            value: 'title',
            sortable: true
          },
          {
            text: 'Salary $',
            value: 'salary',
            sortable: true,
            align: 'right'
          }
        ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories', align:'center' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs', align: 'right' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    methods: {
      selectRow(e) {
        // console.log('click row', e)
        this.snackbarText = `${e.name} / ${e.title}`
        this.snackbar = true
      }
    },
  }
</script>

