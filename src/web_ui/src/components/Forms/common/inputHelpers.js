import { isEmpty } from 'lodash';

export const hasValue = (text) => {
  return !isEmpty(text);
};
