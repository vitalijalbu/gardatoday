import { Row, Col, Card } from "antd";

function AuthLayout({children}) {

  return (
    <div className="auth-page show-fake-browser login-page">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%" }}
      >
        <Col span={8} xl={6} lg={8} md={12} sm={16} xs={18}>
          <Card className="auth-card">{children}</Card>
        </Col>
      </Row>
    </div>
  );
}
export default AuthLayout;

