import dateFormat from 'dateformat'
const now = new Date()
const isoFmt = 'yyyy-mm-dd'
const nowStr = dateFormat(now, isoFmt)
export default {
  state: {
    startDate: nowStr,
    endDate: nowStr,
    minMag: null,
    maxMag: null,
    limit: 100,
    orderby: null
  }
}
