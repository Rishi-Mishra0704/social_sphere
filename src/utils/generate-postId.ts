const generatePostId = (): string => {
  const currentDate = new Date();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
  const day = ("0" + currentDate.getDate()).slice(-2); // Add leading zero if needed
  const year = currentDate.getFullYear();

  let postCount = 1;
  const prefix = `${month}-${day}-${year}`; // Using mm-dd-yyyy format as prefix

  return `${prefix}-P${postCount++}`;
};

export default generatePostId;
