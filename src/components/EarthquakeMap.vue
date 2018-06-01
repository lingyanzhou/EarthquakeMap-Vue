<template>
  <div :id="'div'+xprops.id" class="position-absolute h-100" style="min-height:600px;min-width:900px;">
    <svg class="earthquake-map" :id="'svg'+xprops.id" width="100%" height="100%">
    </svg>
    <div :id="'message'+xprops.id" class="d-flex flex-column earthquake-map-message bg-black fg-white ">
    </div>
  </div>
</template>

<script>
import store from '../assets/EarthquakeMapControlStore.js'
import axios from 'axios'
import * as topojson from 'topojson'
import * as d3 from 'd3'
import * as d3geo from 'd3-geo-projection'

export default {
  name: 'EarthquakeMap',
  props: [
    'xprops'
  ],
  data () {
    return {
      svg: null,
      tooltip: null,
      bgGroup: null,
      fgGroup: null,
      svgWidth: null,
      svgHeight: null,
      projection: null,
      path: null,
      sharedstate: store.state
    }
  },
  mounted: function () {
    this.$eventbus.$on('EarthquakeMapControlConfirmed', this.confirmed)
    this.svg = d3.select('svg#svg' + this.xprops.id)
    this.tooltip = d3.select('div#message' + this.xprops.id)
    this.svgWidth = this.svg.node().getBoundingClientRect().width
    this.svgHeight = this.svg.node().getBoundingClientRect().height
    this.bgGroup = this.svg.append('g')
    this.fgGroup = this.svg.append('g')
    this.projection = d3geo.geoPatterson()
      .scale(153)
      .translate([this.svgWidth / 2, this.svgHeight / 2])
      .precision(0.1)
    this.path = d3.geoPath()
      .projection(this.projection)

    d3.json('static/world-50m.v1.json')
      .then(function (world) {
        this.bgGroup.insert('path', '.graticule')
          .datum(topojson.feature(world, world.objects.land))
          .attr('class', 'land')
          .attr('d', this.path)

        this.bgGroup.insert('path', '.graticule')
          .datum(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b }))
          .attr('class', 'boundary')
          .attr('d', this.path)
      }.bind(this))
  },
  beforeDestroy: function () {
    this.$eventbus.$off('EarthquakeMapControlConfirmed', this.confirmed)
  },
  methods: {
    confirmed: function () {
      axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query', {params: this.makeParams()}
      ).then(function (response) {
        var circles = this.fgGroup.selectAll('circle').remove()

        // Do not reselect, otherwise some circles are still in transition and not totally removed.
        circles.data(response.data['features'])
          .enter()
          .append('circle')
          .attr('cx', function (d) { return this.projection(d.geometry.coordinates)[0] }.bind(this))
          .attr('cy', function (d) { return this.projection(d.geometry.coordinates)[1] }.bind(this))
          .attr('fill', 'red')
          .attr('opacity', '0.2')
          .attr('r', '0')
          .transition()
          .delay(function (d, i) { return i * 300 })
          .duration(200)
          .on('start', function (d, i) { this.tooltip.html(this.makeTooltip(d)) }.bind(this))
          .attr('r', function (d) { return d3.scaleLog().domain([1, 10]).range([1, 10])(Number(d.properties.mag)) })
          .attr('opacity', '0.7')
      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    },
    makeParams: function () {
      var params = {'format': 'geojson'}
      var tmp = Number(this.sharedstate.limit)
      if (tmp > 0 && tmp <= 20000) {
        params['limit'] = tmp
      }

      tmp = null
      try {
        tmp = Date.parse(this.sharedstate.startDate)
      } catch (e) {
      }
      if (tmp !== null) {
        params['starttime'] = this.sharedstate.startDate
      }

      tmp = null
      try {
        tmp = Date.parse(this.sharedstate.endDate)
      } catch (e) {
      }
      if (tmp !== null) {
        params['endtime'] = this.sharedstate.endDate
      }

      if (this.sharedstate.orderby !== null && this.sharedstate.orderby !== '') {
        params['orderby'] = this.sharedstate.orderby
      }

      if (!isNaN(this.sharedstate.minMag)) {
        params['minmagnitude'] = this.sharedstate.minMag
      }

      if (!isNaN(this.sharedstate.maxMag)) {
        params['maxmagnitude'] = this.sharedstate.maxMag
      }
      return params
    },
    makeTooltip: function (d) {
      return '<div class="p-2">Time: ' + (new Date(d.properties.time)).toLocaleDateString() + '</div><div class="p-2">Location: ' + d.properties.place + '</div><div class="p-2">Magnitude: ' + d.properties.mag + '</div><div class="p-2">More: <a href="' + d.properties.url + '">Link</a></div>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
svg.earthquake-map {
  background-color: skyblue;
}

div.earthquake-map-message {
  opacity: 0.6 !important;
  color: white !important;
  background-color: black !important;
  position: absolute !important;
  bottom: 0px !important;
  left: 0px;
  right:0px;
}

.graticule {
  fill: none;
  stroke: #777;
  stroke-width: 0.5px;
  stroke-opacity: 0.5;
}

.land {
  fill: #003945;
}

.boundary {
  fill: none;
  stroke: #fff;
  stroke-width: .5px;
}
</style>
