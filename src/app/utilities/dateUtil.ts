export class DateUtil {

  // convert local time to UTC time, return it as an ISO string without the trailing "Z" .
  public static timeAsLocalISOString(date: Date): string {
    let off = date.getTimezoneOffset() * 60000;
    return (new Date(Date.now() - off)).toISOString().slice(0, -1);
  }

  // format local date into a string
  // 'datePipe.transform(new Date(), 'yy-MM-dd-HH-mm-ss');' with pipe
  public static toIsoStringLocal(date) {
    // tzo and dif are not used
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function (num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };

    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds())
  }

  // Converts a zero-indexed month number to a financial(starting from July) month number.
  public static zeroIndexMonthToFinMonth(monthNumber: number): number {
    let monthNo = monthNumber + 1;
    return this.monthNoToFinMonthNo(monthNo);
  }

  public static monthNoToFinMonthNo(monthNumber: number): number {
    return (monthNumber > 6) ? monthNumber - 6 : monthNumber + 6;
  }

  // Converts a date into human-readable text that represents how long ago the date was compared to the current time.
  public static timeAgoFromNow(date: Date) {
    let d = new Date();

    var seconds = Math.floor(d.valueOf() - date.valueOf());
    // transform second into year
    var interval = seconds / 31536000000;

    // Math.floor(3.7) = 3
    if (interval > 1) {
      return Math.floor(interval) + ((Math.floor(interval) === 1) ? ' year ago' : " years ago");
    }
    interval = seconds / 2592000000;
    if (interval > 1) {
      return Math.floor(interval) + ((Math.floor(interval) === 1) ? ' month ago' : " months ago");
    }
    interval = seconds / 86400000;
    if (interval > 1) {
      return Math.floor(interval) + ((Math.floor(interval) === 1) ? ' day ago' : " days ago");
    }
    interval = seconds / 3600000;
    if (interval > 1) {
      return Math.floor(interval) + ((Math.floor(interval) === 1) ? ' hour ago' : " hours ago");
    }
    interval = seconds / 60000;
    if (interval > 1) {
      return Math.floor(interval) + ((Math.floor(interval) === 1) ? ' minute ago' : " minutes ago");
    }
    return Math.abs(Math.floor(seconds / 1000)) + " seconds ago";
  }

  // return only date portion of input date in ISO string
  public static isoStringNoTime(isoString: string): string {
    let index = isoString.indexOf("T");
    return isoString.slice(0, index);
  }
}