import { createSlice } from "@reduxjs/toolkit";
import jSONTreeData from "./Example";
import { StateType } from "./state.type";
import { ItemPropsType } from "../../Types/ItemProps.type";
import { BranchItemsType } from "../../Types/branchItems.type";
import { findELByID } from "../../Helpers/StraitenInfo";
const initialState: StateType = {
  currentInfo: jSONTreeData,
  currentParsedInfo: JSON.parse(jSONTreeData),
  currentObj: null,
};

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    changeTab: (state, action: { payload: BranchItemsType }) => {
      state.currentObj = action.payload;
    },
    setInitialState: (state) => {
      state.currentParsedInfo = JSON.parse(state.currentInfo);
      state.currentObj = null;
    },
    changeTabText: (
      state,
      action: { payload: { objKey: string; propKey: string; newVal: string } },
    ) => {
      const { objKey, propKey, newVal } = action.payload;
      const fullData = state.currentParsedInfo;
      const neededObject = findELByID(fullData, objKey);
      if (neededObject !== null) neededObject.itemProps[propKey].value = newVal;
      if (state.currentObj !== null)
        state.currentObj.itemProps[propKey].value = newVal;
      state.currentInfo = JSON.stringify(fullData);
    },
  },
});
const { changeTab, changeTabText, setInitialState } = itemSlice.actions;
const { reducer } = itemSlice;
export { reducer, changeTab, changeTabText, setInitialState };
