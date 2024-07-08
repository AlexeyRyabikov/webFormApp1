import { createSelector, createSlice } from "@reduxjs/toolkit";
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
      action: {
        payload: {
          objKey: string;
          propKey: string;
          newVal: string;
          propNum: number;
        };
      },
    ) => {
      const { objKey, propKey, newVal, propNum } = action.payload;
      const neededObject = findELByID(state.currentParsedInfo, objKey);
      if (neededObject !== null)
        neededObject.itemProps[propKey].value[propNum].subPropText = newVal;
      state.currentObj = neededObject;
      state.currentInfo = JSON.stringify(state.currentParsedInfo);
    },
  },
});
const { changeTab, changeTabText, setInitialState } = itemSlice.actions;
const { reducer } = itemSlice;
export { reducer, changeTab, changeTabText, setInitialState };
