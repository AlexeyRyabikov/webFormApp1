import React, { JSX, SyntheticEvent, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { BranchItemsType } from "../../Types/branchItems.type";
import { fieldName, FieldType, PropValType } from "./PropVal.type";
import { Button, FloatButton, Form, FormProps, Input } from "antd";
import { useDispatch } from "react-redux";
import { changeTabText } from "../../Store/ItemSlice/ItemSlice";
import TextArea from "antd/es/input/TextArea";
import styles from "./propValue.module.scss";

function PropVal({ value, keyOfItem, keyOfProperty }: PropValType) {
  const dispatch = useDispatch();
  const onFinishForm: FormProps<FieldType>["onFinish"] = (newVal) => {
    dispatch(
      changeTabText({
        objKey: keyOfItem,
        propKey: keyOfProperty,
        newVal: newVal.newText,
      }),
    );
    setEdit((edit) => !edit);
  };
  const [isEdit, setEdit] = useState(false);
  return (
    <div>
      {!isEdit && (
        <>
          {value.value}
          {value.editable && (
            <div className={styles.Button}>
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => setEdit((edit) => !edit)}
              />
            </div>
          )}
        </>
      )}
      {isEdit && (
        <Form
          name="basic"
          wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          className={styles.Form}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinishForm}
        >
          <Form.Item name={fieldName} initialValue={value.value}>
            {/*<Input value={"ff"} />*/}
            <TextArea rows={4} value={"fff"} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default PropVal;
