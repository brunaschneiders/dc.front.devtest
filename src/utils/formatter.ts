export const getFormattedAddress = (
  street: string,
  suite: string,
  city: string
) => {
  const address = `${street}, ${suite}, ${city}`;

  return address;
};
