export const getUnreadEmails = (array) => {
  return array.filter((email) => !email.read);
};

export const getReadEmails = (array) => {
  return array.filter((email) => email.read);
};

export const getFavoriteEmails = (array) => {
  return array.filter((email) => email.favorite);
};
