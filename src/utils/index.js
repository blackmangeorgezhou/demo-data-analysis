import Printer from './printer'
import Formate from './formate'
import Convertor from './convertor'
import { clearStoreCache, getCurrentDate, getGapDayDateCompareToday } from './user'

function storeLocalStorage (toStoreData) {
  window.sessionStorage.setItem('data-analysis-demo', JSON.stringify(toStoreData))
}

export {
  Printer,
  Formate,
  Convertor,
  storeLocalStorage,
  clearStoreCache
}
