export const isNotificationNotRepeat = (notifications, data) => {
  const isEmpty = notifications.map((notification) => {
    // Check if the notification is not repeat
    if (JSON.stringify(notification) !== JSON.stringify(data.from)) {
      return true; // Return true if the notification is not repeat
    } else {
      return false; // Return false if the notification is repeat
    }
  });
  // Check if there is no notification repeat
  if (!isEmpty.includes(false)) {
    return true; // Return true if there is no notification repeat
  } else {
    return false; // Return false if there is notification repeat
  }
};
