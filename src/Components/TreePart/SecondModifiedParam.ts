import { TreeProps } from "antd";
import { BranchItemsType } from "../../Types/BranchItems.type";
import { ItemType } from "../../Types/Item.type";
type secondParam = Parameters<Exclude<TreeProps["onSelect"], undefined>>[1];
type firstParam = Parameters<Exclude<TreeProps["onSelect"], undefined>>[0];
type node1 = secondParam["node"];
interface newNode extends BranchItemsType, Omit<node1, keyof BranchItemsType> {}
export interface SecondModifiedParam extends secondParam {
  node: newNode;
}
export type selectFuncType = (a: firstParam, b: SecondModifiedParam) => void;
