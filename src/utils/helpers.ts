import moment from 'moment'

export const getFormatedDate = (timestamp: number) => {
  return moment(timestamp).format('YYYY-MM-DD hh:mm A')
}
