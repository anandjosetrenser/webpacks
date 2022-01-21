function createDate(dateStr: string): Date {
  var yr = parseInt(dateStr.substr(0, 4));
  var mon = parseInt(dateStr.substr(5, 2));
  var dt = parseInt(dateStr.substr(8, 2));
  var date = new Date(yr, mon - 1, dt);
  return date;
}

function changeDateFormatToDefault(dateStr: string): string {
  var yr = parseInt(dateStr.substr(0, 4));
  var mon = parseInt(dateStr.substr(5, 2));
  var dt = parseInt(dateStr.substr(8, 2));
  return `${dt}/${mon}/${yr}`;
}

export { createDate, changeDateFormatToDefault };
