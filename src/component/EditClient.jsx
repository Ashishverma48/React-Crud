import React, { useEffect, useState } from "react";
import swal from "sweetalert";
function EditClient({ editClient, setClient, client, setIsEditing }) {
  const [name, setName] = useState(editClient.name);
  const [email, setEmail] = useState(editClient.email);
  const [total, setTotal] = useState(editClient.total);
  const [date, setDate] = useState(editClient.date);
  const [balance, setBalance] = useState(editClient.balance);
  const [id, setId] = useState(editClient.id);
  const newClient = {
    id,
    name,
    email,
    total,
    date,
    balance,
  };

  function handleSubmit(e) {
    e.preventDefault();

    const index = client.findIndex((cli) => cli.id == id);
    client.splice(index, 1, newClient);
    localStorage.setItem("client_data", JSON.stringify(client));
    setClient(client);

    setIsEditing(false);
    swal({
      title: "Update Successfully!",
      text: `${name} Has Been Updated`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <div className="md:w-4/6 mx-auto shadow-sm p-3">
      <h3 className="font-bold text-[40px] ">Update Client</h3>
      <button className="font-semibold py-2 px-5 rounded-sm bg-blue-600 text-white" onClick={()=>setIsEditing(false)}> Back</button>

      <form action="" onSubmit={handleSubmit}>
        <div className=" mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-5">
          <div>
            <label htmlFor="">Name</label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"
              className="w-full rounded-sm border py-2 px-2 mt-1 focus:ring-violet-500 border-indigo-500 focus:ring-2 outline-none focus:border-transparent"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-indigo-500 py-2 px-2 mt-1 focus:ring-violet-500 focus:ring-2 outline-none focus:border-transparent"
              placeholder="username@gmail.com"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Total</label>
            <input
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              type="number"
              placeholder="Enter Total Amount"
              className="w-full border-indigo-500 rounded-sm border py-2 px-2 mt-1 focus:ring-violet-500 focus:ring-2 outline-none focus:border-transparent"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Issued Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-sm border py-2 px-2 mt-1 border-indigo-500 focus:ring-violet-500 focus:ring-2 outline-none focus:border-transparent"
              placeholder="username@gmail.com"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Balance</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full rounded-sm border py-2 px-2 mt-1 border-indigo-500 focus:ring-violet-500 focus:ring-2 outline-none focus:border-transparent"
              placeholder="Enter Balance"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="mx-auto w-fit mt-5">
          <button
            type="submit"
            className="py-2 px-20  mx-auto rounded-sm bg-indigo-600 text-white font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClient;
