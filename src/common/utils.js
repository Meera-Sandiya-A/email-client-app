export const getUnreadEmails = (array) => {
  return array.filter((email) => !email.read);
};

export const getReadEmails = (array) => {
  return array.filter((email) => email.read);
};

export const getFavoriteEmails = (array) => {
  return array.filter((email) => email.favorite);
};

export const getEmailsByType = (array, type) => {
  let emails = [];

  if (type === "Unread") {
    emails = getUnreadEmails(array);
  } else if (type === "Read") {
    emails = getReadEmails(array);
  } else if (type === "Favorites") {
    emails = getFavoriteEmails(array);
  } else {
    return array;
  }

  return emails;
};
