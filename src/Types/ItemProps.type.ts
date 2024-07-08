export type SubProp = {
  subPropName: string;
  subPropText: string;
  editable: boolean;
};

export type PropsInfo = {
  value: SubProp[];
  nameProp: string;
  editable: boolean;
};

export type ItemPropsType = {
  [key: string]: PropsInfo;
  // [key: string]: string;
};
