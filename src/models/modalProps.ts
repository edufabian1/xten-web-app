import { IArticle } from "./article";

export interface IModalProps {
  isVisible: boolean;
  handleClose: Function;
}

export interface IModalPropsWithForm extends IModalProps {
  article?: IArticle;
}
