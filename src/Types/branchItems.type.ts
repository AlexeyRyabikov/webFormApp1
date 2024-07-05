import { ItemType } from "./Item.type";

export interface BranchItemsType extends ItemType {
  children?: BranchItemsType[];
  key: string;
}
