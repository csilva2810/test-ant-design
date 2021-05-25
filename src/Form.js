import { Form, Input, Button, Checkbox, Select, DatePicker, Space } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const UserForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCountry = (value) => {
    console.log(`country ${value}`);
  };

  const handleBirthday = (date, dateString) => {
    console.log(`birthday ${date}, ${dateString}`);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <Select onChange={handleCountry}>
          <Option value="">- Select one -</Option>
          <Option value="brazil">Brazil</Option>
          <Option value="chile">Chile</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Birthday"
        name="birthday"
        rules={[
          {
            required: true,
            message: "Please input your birthday!",
          },
        ]}
      >
        <DatePicker onChange={handleBirthday} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="ghost" htmlType="reset">
            Cancel
          </Button>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
