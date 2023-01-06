const getError = (name: string, errors: object = {}, touched: object = {}) => {
  return errors?.[name as keyof typeof errors] &&
    touched[name as keyof typeof touched]
    ? errors[name as keyof typeof errors]
    : null;
};

const PostStatus = [
  { _id: 1, title: "Public" },
  { _id: 2, title: "Custom" },
  { _id: 3, title: "Friends" },
  { _id: 4, title: "Only me" },
];

export { PostStatus, getError };
