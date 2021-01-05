const getMoonPhase = (year: number, month: number, day: any) => {
  let c: number = 0;
  let e: number = 0;
  let jd: number = 0;
  let b: number = 0;
  if (month < 3) {
    year--;
    month += 12;
  }
  ++month;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; //jd is total days elapsed
  jd /= 29.5305882; //divide by the moon cycle
  b = parseInt(jd.toString()); //int(jd) -> b, take integer part of jd
  jd -= b; //subtract integer part to leave fractional part of original jd
  b = Math.round(jd * 30); //scale fraction from 1-30 and round
  return b;
};

const isMoonGrowingToday = () => {
  const today = new Date();
  const phase = getMoonPhase(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  return phase < 15;
};

export default isMoonGrowingToday;
