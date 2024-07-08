export type SubProp = {
  subPropName: string;
  subPropText: string;
  editable: boolean;
};

export type propsInfo = {
  value: SubProp[];
  nameProp: string;
  editable: boolean;
};

export type ItemPropsType = {
  [key: string]: propsInfo;
  // [key: string]: string;
};
