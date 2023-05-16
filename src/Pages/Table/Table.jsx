/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ChocolateTable from "./ChocolateTable";


const Table = ({ chocolates }) => {
  
  return (
    <div className="mt-12">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Image</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <tbody className="">
                  {chocolates.map((chocolate) => (
                    <ChocolateTable
                      key={chocolate._id}
                      chocolate={chocolate}
                    ></ChocolateTable>
                  ))}
                </tbody>
              </table>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;