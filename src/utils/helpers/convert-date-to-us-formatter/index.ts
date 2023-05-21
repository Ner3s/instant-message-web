// @TODO - Create tests for this function

export const convertDateToUsFormatter = (date: string | undefined) => {
  const regexIdentify = /[-T:]/i;
  const US_PATTERN = regexIdentify.test(`${date}`);

  const dateSplited = US_PATTERN
    ? date && date.split('-').join('T').split('T').join(':').split(':')
    : date && date.split('/');
  const dateFormatted = US_PATTERN
    ? dateSplited && `${dateSplited[0]}-${dateSplited[1]}-${dateSplited[2]}`
    : dateSplited && `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}`;

  return dateFormatted;
};
