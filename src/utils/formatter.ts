export const getFormattedAddress = (
  street: string,
  suite: string,
  city: string
) => {
  if (street && suite && city) {
    return `${street}, ${suite}, ${city}`;
  }
  return '';
};
