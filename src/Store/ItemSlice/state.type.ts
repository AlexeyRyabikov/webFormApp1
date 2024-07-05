import { ItemType } from "../../Types/Item.type";
import { BranchItemsType } from "../../Types/branchItems.type";

export type StateType = {
  currentInfo: string;
  currentParsedInfo: BranchItemsType[];
  currentObj: ItemType | null;
};