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
    
    return (
      <div>
        {this.state.DataCategory.map((Category) => {
            
        return <CategoryFeaturedComponent data={Category}  key={Category.product_id}/>;
        })}
      </div>
    );
  }
}
export default CategoryFeatured;
