import React from "react";
import Topbar from "../component/Topbar";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { productData } from "../data/data";
const ProductCard = ({ cart }) => {
  //INI MENANGKAP PROPS YANG DI LEMPAR DARI KOMPONEN PRODUCT CARD

  const product = productData.find((pro) => pro.id === cart.product_id) || {};
  console.log(product);
  const dispatch = useDispatch();
  function handleRemoveItem() {
    const id = cart.id;
    console.log(id);
    dispatch({
      type: "cart/delete",
      payload: {
        id: id,
      },
    });
  }
  function handleAddItem() {
    const newAmount = cart.amount + 1;
    dispatch({
      type: "cart/update",
      payload: {
        id: cart.id,
        amount: newAmount,
      },
    });
  }
  function handleSubstractItem() {
    if (cart.amount === 0) {
      alert("item tidak boleh kurang dari 0");
      return;
    }
    const newAmount = cart.amount - 1;
    dispatch({
      type: "cart/update",
      payload: {
        id: cart.id,
        amount: newAmount,
      },
    });
  }
  return (
    <Stack>
      <Row>
        <Col xs={3}>
          <Card.Img src={product.image} />
        </Col>
        <Col xs={5}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.color && product.color[0]}</Card.Text>
          <Card.Text>{product.sizes[0]}</Card.Text>
          <Card.Link>
            <Button
              onClick={handleRemoveItem}
              variant="light"
              size="sm"
              className="me-3 mb-3"
            >
              Remove Item
            </Button>
            <Button variant="light" size="sm" className="me-3 mb-3">
              Move To Wacth List
            </Button>
          </Card.Link>

          {/* HARGA DAN AKSI */}
        </Col>
        <Col xs={4}>
          <div className="float-right">
            <Stack
              direction="horizontal"
              style={{ justifyContent: "flex-end" }}
            >
              <Button
                onClick={handleSubstractItem}
                variant="light"
                style={{ width: 50 }}
                size="sm"
              >
                -
              </Button>
              <Button variant="light" style={{ width: 50 }} size="sm">
                {cart.amount}
              </Button>
              <Button
                onClick={handleAddItem}
                variant="light"
                style={{ width: 50 }}
                size="sm"
              >
                +
              </Button>
            </Stack>
            <p
              style={{
                marginTop: 100,
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              RP. {cart.total}
            </p>
          </div>
        </Col>
      </Row>
    </Stack>
  );
};
const Cart = () => {
  const dataCart = useSelector((state) => state.cart);
  console.log(dataCart);
  ///INI ADLAHA HASIL PENJUMLAHAN DARI TOTAL YANG ADA DI CART
  // curr => ITEM SESUDAHNYA
  //ACC  => ITEM SEBELUMNYA

  const totalAmount = dataCart.reduce((acc, curr) => acc + curr.total, 0);
  return (
    <div>
      <Topbar />
      <Container style={{ padding: 32 }}>
        <Row>
          {/* SISI SEBELAH KIRI */}
          <Col md={8}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Cart ({dataCart.length} item)</Card.Title>
                {dataCart.map((cart) => {
                  //PROPS ITU ADALAH DATA DARI PARENT YANG DIWARISKAN KE KOMPONEN ANAKNYA
                  return <ProductCard cart={cart} />;
                })}
              </Card.Body>
            </Card>
          </Col>
          {/* SISI SEBELAH KANAN */}
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>The total amount of</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex">
                    <div className="me-auto">Temporary Amount</div>
                    <div>Rp.{totalAmount}</div>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex">
                    <div className="me-auto">Shipping</div>
                    <div>Gratis</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="fw-bold d-flex">
                    <div className="me-auto">
                      The total amount of (including WAT)
                    </div>
                    <div>Rp.{totalAmount}</div>
                  </ListGroup.Item>
                </ListGroup>
                <div className="d-grid mt-3">
                  <Button variant="primary">CheckOut</Button>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Form.Select aria-label="Add a check Out code (optional)">
                <option>Add a check Out code (optional)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Button variant="link">bab</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
