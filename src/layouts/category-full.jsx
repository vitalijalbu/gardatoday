import { Breadcrumb, Layout } from "antd";
const { Footer, Content, Sider } = Layout;
import SideNav from "@/shared/Partials/SideNav";

function AdminLayout(props) {
  return (
    <Layout className="main-layout">
      <Sider
        breakpoint="lg"
        width={"260px"}
        theme="light"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <SideNav />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "30px 15px 0 15px",
            maxWidth: "100%",
            overflow: "auto",
          }}
        >
          <div className="container">{props.children}</div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          <p>
            &copy; {new Date().getFullYear()} Made in{" "}
            <a href="https://duckma.com/" target="_blank" rel="noreferrer">
              DUCKMA
            </a>
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
}
export default AdminLayout;
