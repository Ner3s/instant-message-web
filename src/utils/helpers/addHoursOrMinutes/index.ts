/**
 *
 * @param theDate Date
 * @param time number (minutes) or hours (60 * hours)
 * @returns Date with added time
 */
export const addHoursOrMinutes = (theDate: Date, time: number) => {
  return new Date(theDate.getTime() + time * 60000);
};
