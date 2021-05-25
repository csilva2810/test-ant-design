import { Layout, Typography } from "antd";
import "./App.less";
import Form from "./Form";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header>
        <Typography.Text>Header</Typography.Text>
      </Header>
      <Layout>
        <Sider className="sidebar">Sider</Sider>
        <Content>
          <Form />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
