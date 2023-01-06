import Col from "../components/Col";
import Post from "../components/post/Post";
import Row from "../components/Row";
import AddPost from "../components/AddPost";

/**
 * User dashbaord
 * @returns
 */
const Dashbaord = () => {
  console.log("hi");
  return (
    <>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <AddPost />
          <Post />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default Dashbaord;
