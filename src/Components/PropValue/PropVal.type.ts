import { propsInfo, SubProp } from "../../Types/ItemProps.type";

export type PropValType = {
  value: SubProp;
  keyOfItem: string;
  keyOfProperty: string;
  propNum: number;
};
export type FieldType = {
  newText: string;
};
export interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}
export const fieldName = "newText";
