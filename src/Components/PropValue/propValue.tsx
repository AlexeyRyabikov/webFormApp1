import React, { JSX, SyntheticEvent, useState } from "react";
import { EditOutlined, RollbackOutlined } from "@ant-design/icons";
import { BranchItemsType } from "../../Types/branchItems.type";
import { FieldData, fieldName, FieldType, PropValType } from "./PropVal.type";
import { Button, FloatButton, Form, FormProps, Input, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
import { useDispatch } from "react-redux";
import { changeTabText } from "../../Store/ItemSlice/ItemSlice";
import styles from "./propValue.module.scss";
import TextArea from "antd/es/input/TextArea";

function PropVal({ value, keyOfItem, keyOfProperty, propNum }: PropValType) {
  const dispatch = useDispatch();
  const [inputField, setInputField] = useState<FieldData[]>([
    { name: [fieldName], value: value.subPropText },
  ]);
  const [form] = Form.useForm();
  const onFinishForm: FormProps<FieldType>["onFinish"] = (newVal) => {
    dispatch(
      changeTabText({
        objKey: keyOfItem,
        propKey: keyOfProperty,
        newVal: newVal.newText,
        propNum: propNum,
      }),
    );
    setEdit((edit) => !edit);
  };
  const [isEdit, setEdit] = useState(false);
  return (
    <div>
      <Title level={4}>{value.subPropName}</Title>
      {!isEdit && (
        <>
          {value.subPropText}
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
          form={form}
          name="basic"
          wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          className={styles.Form}
          initialValues={{ remember: true }}
          autoComplete="off"
          fields={inputField}
          onFieldsChange={(_, allFields) => {
            setInputField(allFields);
          }}
          onFinish={onFinishForm}
        >
          <Form.Item name={fieldName}>
            {/*<Input value={"ff"} />*/}
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {"    "}
            <Button
              // type="primary"
              shape="circle"
              icon={<RollbackOutlined />}
              onClick={() => {
                setInputField([
                  { name: [fieldName], value: value.subPropText },
                ]);
                setEdit((edit) => !edit);
              }}
            />
          </Form.Item>
        </Form>
      )}
      <br />
    </div>
  );
}

export default PropVal;
