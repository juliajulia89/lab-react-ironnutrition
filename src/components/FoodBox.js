import { Card, Row, Col, Divider, Input, Button } from "antd";
import React from "react";


const FoodBox = (props)=> {
    const {food} = props;

    return (
      <div>
        <Col>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} height="60px" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>
                Total Calories: {food.calories} * {food.servings}
              </b>
              kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      </div>
    );
}

export default FoodBox;
