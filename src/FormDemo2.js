import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSumbit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
    alertify.success(this.state.password + " added to db!");
    alertify.success(this.state.city + " added to db!");
    alertify.success(this.state.description + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSumbit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city"></Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Kiel</option>
              <option>Hamburg</option>
              <option>Berlin</option>
              <option>K??ln</option>
              <option>M??nchen</option>
              <option>Leipzig</option>
              <option>Frankfurt</option>
              <option>Stuttgart</option>
            </Input>
          </FormGroup>
          <Button color="warning" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
