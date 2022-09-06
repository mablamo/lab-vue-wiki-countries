<script setup>
import countriesList from "/Users/mario/Desktop/IronHack/LABs/vue-countries/lab-vue-wiki-countries/public/countries.json";
</script>

<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countriesList"
        :key="country.alpha2Code"
        class="list-group-item list-group-item-action"
        :to="`/${country.alpha3Code}`"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
  </div>
</template>