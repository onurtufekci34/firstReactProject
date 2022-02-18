import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  // getCategories = () => {
  //   fetch("http://localhost:3000/categories")
  //     .then(response => response.json())
  //     .then(data => this.setState({ categories: data }));
  // };
  getCategories = () => {
    this.setState({
      categories: [
        {
          id: 1,
          categoryName: "Beverages",
          seoUrl: "beverages",
        },
        {
          id: 2,
          categoryName: "Condiments",
          seoUrl: "condiments",
        },
        {
          id: 3,
          categoryName: "Confections",
          seoUrl: "confections",
        },
        {
          id: 4,
          categoryName: "Dairy Products",
          seoUrl: "dairy-products",
        },
        {
          id: 5,
          categoryName: "Grains/Cereals",
          seoUrl: "grains-cereals",
        },
        {
          id: 6,
          categoryName: "Meat/Poultry",
          seoUrl: "meat-poultry",
        },
        {
          id: 7,
          categoryName: "Produce",
          seoUrl: "produce",
        },
        {
          id: 8,
          categoryName: "Seafood",
          seoUrl: "seafood",
        },
      ],
    });
  };

  render() {
    return (
      <div style={{ cursor: "pointer" }}>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              action
              variant="primary"
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
