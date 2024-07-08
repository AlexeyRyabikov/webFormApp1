import React, { useState } from "react";
import styles from "./TabPart.module.scss";
import { useSelector } from "react-redux";
import { StateType } from "../../Store/ItemSlice/state.type";
import { Tabs } from "antd";
import { EditOutlined } from "@ant-design/icons";
import PropVal from "../PropValue/propValue";
import { compose } from "@reduxjs/toolkit";

const TabPart: React.FC = () => {
  let itemKey: string;
  const [activeTab, setActiveTab] = useState("");
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
          {value[1].value.map((val, index) => (
            <PropVal
              value={val}
              keyOfItem={itemKey}
              keyOfProperty={value[0]}
              propNum={index}
              key={itemKey + value[0] + index.toString()}
            />
          ))}
        </>
      ),
      key: itemKey + value[0],
    };
  });
  return (
    <div className={styles.Outer}>
      <Tabs
        defaultActiveKey="1"
        items={ItemsToTabs}
        activeKey={activeTab}
        onChange={(e) => setActiveTab(e)}
      />
    </div>
  );
};
export default TabPart;
