export default function sortByDate(date1, date2) {
  const firstDate = new Date(date1.date).getTime();
  const secondDate = new Date(date2.date).getTime();

  return  secondDate - firstDate 
}