import { Link, useLoaderData } from "react-router-dom";
import Table from "../../Table/Table";


const SelectChocolate = () => {
  const chocolates = useLoaderData();
  // console.log(chocolates)
    return (
      <div>
        <div className="mt-10">
          <Link to="/select">
            <button className="btn ml-10">+ New Chocolate</button>
          </Link>
        </div>
        <Table chocolates={chocolates}></Table>
      </div>
    );
};

export default SelectChocolate;