import React, { useState } from "react";
import {Row,Col,Form,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let dispatch = useDispatch();
  let [keyword, setKeyword] = useState("");
  let { contact } = useSelector((state) => state);
  const search = (event) => {
    event.preventDefault();
    dispatch({ type: 'search_by_username', payload: { keyword } });
  }
    return (
      <Form onSubmit={search}>
        <Row>
          <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setKeyword(event.target.value)} />
          </Col>
          <Col lg={2}>
            <Button type="submit">찾기</Button>
          </Col>
        </Row>
      </Form>
    )
}

export default SearchBox;