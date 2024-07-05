import { TreeDataNode } from "antd";
import { ItemPropsType } from "./ItemProps.type";

export interface ItemType extends TreeDataNode {
  itemProps: ItemPropsType;
  key: string;
  title: string;
}
