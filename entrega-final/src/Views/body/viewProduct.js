import Product from "../../components/body/ItemDescription/ItemDescription";

const viewProduct = ({match}) => {
  return (
    <div>
      <Product  data={match.params.id}/>
    </div>
  );
};

export default viewProduct;
