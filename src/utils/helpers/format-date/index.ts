interface IDateFormatter {
  date?: string;
  customOptions?: Intl.DateTimeFormatOptions;
}

function dateFormatter({ date, customOptions }: IDateFormatter) {
  const options = {
    timeZone: 'America/Sao_Paulo',
    ...customOptions
  };

  const didHaveTimezone = date?.includes('T');

  return (
    date &&
    new Intl.DateTimeFormat('pt-br', options).format(
      new Date((!didHaveTimezone && `${date}T00:00:00`) || date)
    )
  );
}

export { dateFormatter };
