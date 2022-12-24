import Col from "../components/Col";
import Post from "../components/post/Post";
import Row from "../components/Row";

/**
 * User dashbaord
 * @returns
 */
const Dashbaord = () => {
  return (
    <>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Post />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default Dashbaord;
