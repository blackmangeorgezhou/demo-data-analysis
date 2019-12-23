import moment from 'moment'
import { Printer } from '@/utils'
import store from '@/store'
let MemoryCache = store ? store.state : null

// Clear the state information after logout.
function clearStoreCache() {
  if (MemoryCache) {
    for(let key in MemoryCache) {
      if (key && MemoryCache[key]) {
        MemoryCache[key] = null
      }
    }
  }

  // Printer('clear state information')
}

function storeLocalStorage (toStoreData) {
  window.sessionStorage.setItem('lecturePageData', JSON.stringify(toStoreData))
}

function getCurrentDate () {
  return moment().format('YYYY-MM-DD')
}

function getGapDayDateCompareToday (gapDay = 0) {
  return moment().add(gapDay, 'day').format('YYYY-MM-DD')
}

export {
  clearStoreCache,
  storeLocalStorage,
  getCurrentDate,
  getGapDayDateCompareToday
}