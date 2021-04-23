import { IArticle } from "../../models/article";

export const ArticleValidator = (values: IArticle) => {
  const errors = {title:""};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 10) {
    errors.title = "Must be 15 characters or less";
  }
  return errors;
};
