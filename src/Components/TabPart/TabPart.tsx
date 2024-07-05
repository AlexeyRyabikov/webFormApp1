import React from "react";
import styles from "./TabPart.module.scss";
import { useSelector } from "react-redux";
import { StateType } from "../../Store/ItemSlice/state.type";
import { Tabs } from "antd";
import { EditOutlined } from "@ant-design/icons";
import PropVal from "../PropValue/propValue";
import { compose } from "@reduxjs/toolkit";

const TabPart: React.FC = () => {
  let itemKey: string;
  const currentProps = useSelector((state: StateType) => {
    itemKey = state.currentObj === null ? "" : state.currentObj.key;
    return state.currentObj === null ? {} : state.currentObj.itemProps;
  });
  const propCouples = Object.entries(currentProps);
  const ItemsToTabs = propCouples.map((value) => {
    return {
      label: value[1].nameProp,
      children: (
        <>
          <PropVal
            value={value[1]}
            keyOfItem={itemKey}
            keyOfProperty={value[0]}
          />
        </>
      ),
      key: itemKey + value[0],
    };
  });
  return (
    <div className={styles.Outer}>
      <Tabs defaultActiveKey="1" items={ItemsToTabs} />
    </div>
  );
};
export default TabPart;
