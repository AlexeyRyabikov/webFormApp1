import { BranchItemsType } from "../Types/BranchItems.type";
export const findELByID = (
  unstratenedData: BranchItemsType[],
  id: string,
): BranchItemsType | null => {
  let found = null;
  for (const item of unstratenedData) {
    if (item.key === id) return item;
    if (item.children) {
      found = findELByID(item.children, id);
      if (found) return found;
    } else {
      found = null;
    }
  }
  return found;
};
