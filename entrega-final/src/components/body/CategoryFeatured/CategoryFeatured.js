import React, { Component } from "react";
import { Categorys } from "../../Product/CategoryFeaturedData";
import CategoryFeaturedComponent from './CategoryFeaturedComponent'

class CategoryFeatured extends Component {
  constructor() {
    super();
    this.state = {
      DataCategory: [],
    };
  }

  componentDidMount() {
    this.setState({ DataCategory: Categorys });
  }

  render() {
    //console.log('data', this.state.DataCategory)
    return (
      <div className="row">
        {this.state.DataCategory?.map((Category) => {
            console.log(Category)
        return <CategoryFeaturedComponent data={Category}  key={Category.product_id}/>;
        })}
      </div>
    );
  }
}
export default CategoryFeatured;
