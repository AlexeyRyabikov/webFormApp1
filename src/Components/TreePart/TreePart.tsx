import React, { SyntheticEvent } from "react";
import styles from "./TreePatt.module.scss";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../Store/ItemSlice/state.type";
import { BranchItemsType } from "../../Types/branchItems.type";
import { ItemType } from "../../Types/Item.type";
import { SecondModifiedParam, selectFuncType } from "./SecondModifiedParam";
import { changeTab, reducer } from "../../Store/ItemSlice/ItemSlice";

export default function TreePart() {
  const dispatch = useDispatch();
  const currentJSONInfo = useSelector((state: StateType) => state.currentInfo);
  const currentParsedInfo: BranchItemsType[] = JSON.parse(currentJSONInfo);
  console.log(currentParsedInfo);
  const onSelect: selectFuncType = (
    selectedKeys,
    // info,
    info: SecondModifiedParam,
  ) => {
    dispatch(changeTab(info.node));
    console.log("selected", info.node);
  };
  return (
    <div className={styles.Outer}>
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["0-0"]}
        onSelect={onSelect}
        treeData={currentParsedInfo}
      />
    </div>
  );
}
