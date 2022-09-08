<script setup>
import countriesList from "/Users/mario/Desktop/IronHack/LABs/vue-countries/lab-vue-wiki-countries/public/countries.json";
import { useRoute } from 'vue-router'
import { reactive, watch, getCurrentInstance } from 'vue'
const route = useRoute()
let country = reactive(countriesList.filter(elem=> elem.alpha3Code == route.params.countryID)[0])
console.log(route.params.countryID)
watch (() => route.params.countryID, (newValue, oldValue) => {
  country.value = countriesList.filter(elem=> elem.alpha3Code ==newValue)[0]
  console.log(country.value)
})

</script>

<template>
<div class="col-7">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 300px"/>
            <h1>{{ country.value.name.common }}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital }}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{ country.area }} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li v-for="item in country.borders" :key="item.alpha2Code"><a :href="`/${item}`">{{ countriesList.filter(elem=> elem.alpha3Code == item)[0].name.common }}</a></li>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>

