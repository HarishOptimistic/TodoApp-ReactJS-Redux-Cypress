import React from 'react';
import { Card, CardTitle, CardText } from "reactstrap";

import "./dashboard.css";

const dashboard = (props) => {
 return (
  <div className="dashboard row">
  <Card className="dashboard-card col">
    <CardTitle># Total Task</CardTitle>
    <CardText className="card-body">{props.total}</CardText>
  </Card>
  <Card className="dashboard-card col">
    <CardTitle># Open</CardTitle>
    <CardText className="card-body">{props.open}</CardText>
  </Card>
  <Card className="dashboard-card col">
    <CardTitle># Completed</CardTitle>
    <CardText className="card-body">{props.completed}</CardText>
  </Card>
  <Card className="dashboard-card col">
    <CardTitle># Cancelled</CardTitle>
    <CardText className="card-body">{props.cancelled}</CardText>
  </Card>
</div>
 )
}

export default dashboard;
