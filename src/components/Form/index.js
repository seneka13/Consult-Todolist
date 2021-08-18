import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const FormComponent = ({ setTodoList, setVisible }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setTodoList((prev) => [...prev, { id: Date.now(), ...values }]);
    setVisible(false);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="done" label="Done" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <ButtonContainer>
        <SubmitButton active={false} htmlType="submit">
          Submit
        </SubmitButton>
        <ResetButton htmlType="button" onClick={onReset}>
          Reset
        </ResetButton>
      </ButtonContainer>
    </Form>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  background: ${(props) => (props.active ? 'rgb (70, 170, 0)' : 'rgb(70, 170, 0)')};
  color: white;
  border-radius: 10px;

  &::hover {
    background: rgb(70, 170, 0);
    color: white;
    border: 1px solid wheat;
  }
`;

const ResetButton = styled(Button)`
  background: rgb(170, 60, 0);
  color: white;
  border-radius: 10px;
`;
