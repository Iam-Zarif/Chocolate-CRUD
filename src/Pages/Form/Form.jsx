import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const Category = form.Category.value;
    const data = { name, country, Category };
    console.log(data);
    fetch("http://localhost:5000/chocolate",{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body :JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
       Swal.fire({
         title: "Success!",
         text: "Success successfully",
         icon: "success",
         confirmButtonText: "Cool",
       });
      }
    })
  };
  return (
    <>
      <div>
        <Link to="/">
          <button className="btn ml-10">{"<- "} See all chocolates</button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-10 mt-14">
        <div className="text-center">
          <p className="text-3xl text-white font-semibold">New Chocolates</p>
          <p className="text-lg font-bold text-white">
            Use the below form to create a new product
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-10"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                className="input input-bordered input-info w-96 block"
                type="text"
                name="name"
                id=""
              />
            </div>{" "}
            <div>
              <label htmlFor="country">country</label>
              <input
                required
                className="input input-bordered input-info w-96 block"
                type="text"
                name="country"
                id=""
              />
            </div>
            <div>
              <label>Category</label>
              <select
                className="select select-info w-96 block input-group"
                name="Category"
              >
                <option className="input">Premium</option>
                <option className="input">Medium</option>
                <option className="input">Low</option>
              </select>
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                className="btn w-96"
                value="submit"
                id=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
