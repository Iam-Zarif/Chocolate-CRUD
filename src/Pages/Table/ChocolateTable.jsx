/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const ChocolateTable = ({ chocolate }) => {
    const {_id} = chocolate
    const handleDelete =(_id) =>{
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire("Deleted!", "Your file has been deleted.", "success");
    fetch(`http://localhost:5000/chocolate/${_id}`,{
method : 'DELETE',

    }).then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount){
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    })
  }
});
    }
  return (
    <div className="">
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <img
              className="w-20 rounded-full"
              src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/328988827_855047999121476_1898696410192533741_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFampvZOd6Pa0rrl9iMOMHKtTZzydZtx9u1NnPJ1m3H22-Vp7EUagx29BTWhTip4xv-yoB_sXdt0V7_1hUkE-mn&_nc_ohc=8nriRd69P8oAX8gf6Sa&_nc_ht=scontent.fdac7-1.fna&oh=00_AfDeNLVwZf99-GCpEqtJKexa8NBOQhmWzZX_BVJWO2_b1A&oe=64693CF5"
              alt=""
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12"></div>
            </div>
            <div>
              <div className="font-bold">{chocolate.name}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{chocolate.country}</p>
        </td>
        <td>{chocolate.Category}</td>
        <th>
          <button className="btn btn-sm ">edit</button>
          <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline ml-5 bg-red-700">
          
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      </tr>
    </div>
  );
};

export default ChocolateTable;