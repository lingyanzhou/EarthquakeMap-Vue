<template>
  <form>
    <div class="form-group row">
      <label for="inputStartDate" class="col col-form-label">Start Date</label>
      <div class="col">
        <input type="date" class="form-control" id="inputStartDate" v-model="sharedstate.startDate"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEndDate" class="col col-form-label" >End Date</label>
      <div class="col">
        <input type="date" class="form-control" id="inputEndDate" v-model="sharedstate.endDate"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputMinMag" class="col col-form-label">Min Magnitude</label>
      <div class="col">
        <input type="number" class="form-control" id="inputMinMag" v-model="sharedstate.minMag"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputMaxMag" class="col col-form-label">Max Magnitude</label>
      <div class="col">
        <input type="number" class="form-control" id="inputMaxMag" v-model="sharedstate.maxMag"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputOrder" class="col col-form-label">Order</label>
      <div class="col">
        <select class="form-control" id="inputOrder" v-model="sharedstate.orderby">
          <option value="">No Order</option>
          <option value="time">Time Desc</option>
          <option value="time-asc">Time Asc</option>
          <option value="magnitude">Magnitude Desc</option>
          <option value="magnitude-asc">Magnitude Asc</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputRowLimit" class="col col-form-label">Row Limit</label>
      <div class="col">
        <input type="number" class="form-control" id="inputRowLimit" v-model="sharedstate.limit" />
      </div>
    </div>
    <div class="form-group row">
      <button class="form-control" @click="confirm">Confirm</button>
    </div>
  </form>
</template>

<script>
import store from '../assets/EarthquakeMapControlStore.js'

export default {
  name: 'EarthquakeMapControl',
  data () {
    return {
      sharedstate: store.state
    }
  },
  mounted: function () {

  },
  methods: {
    confirm: function () {
      this.$eventbus.$emit('EarthquakeMapControlConfirmed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
