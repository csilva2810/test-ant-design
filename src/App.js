import { Button, Layout, Typography } from "antd";
import "./App.less";

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header>
        <Typography.Text>Header</Typography.Text>
      </Header>
      <Layout>
        <Sider className="sidebar">Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
