import React, { useEffect } from "react";
import TabPart from "../TabPart/TabPart";
import TreePart from "../TreePart/TreePart";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { setInitialState } from "../../Store/ItemSlice/ItemSlice";
// import {t}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialState());
  }, []);
  return (
    <div className={styles.App}>
      <TreePart />
      <TabPart />
    </div>
  );
}

export default App;
