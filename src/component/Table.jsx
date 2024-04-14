import React from "react";

function Table({ client, handleDelete, handleEdit }) {
  //   console.log(client);
  return (
    <div>
      <table className="w-full ">
        <thead>
          <tr className="bg-violet-200 ">
            <th className="py-3 px-5 text-start">NO.</th>
            <th className="py-3 px-5 text-start">CLIENT</th>
            <th className="py-3 px-5 text-start">TOTAL</th>
            <th className="py-3 px-5 text-start">ISSUE DATE</th>
            <th className="py-3 px-5 text-start">BALANCE</th>
            <th className="py-3 px-5 text-start">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {client && client.length > 0 ? (
            client?.map((data, index) => (
              <tr
                key={`client-${index}`}
                className={`${index % 2 !== 0 ? "bg-violet-50" : ""}`}
              >
                <td className="py-2 px-4 font-semibold text-violet-800">
                  {index + 1}
                </td>
                <td className="py-2 px-4">
                  <ul>
                    <li>{data.name}</li>
                    <li>{data.email}</li>
                  </ul>
                </td>
                <td className="py-2 px-4">₹ {data.total}</td>
                <td className="py-2 px-4">{data.date}</td>
                <td className="py-2 px-4">
                  {data.balance > 0 ? (
                      <>₹ {data.balance}</>
                  ) : (
                    <button className="py-2 px-5 rounded-md font-bold bg-green-200 text-green-800">
                      Paid
                    </button>
                )}
                </td>
                <td className="py-2 px-4">
                  <button onClick={() => handleEdit(data.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-green-700 mr-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button onClick={() => handleDelete(data.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-rose-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-3 text-center text-red-400">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;