import React, { useEffect, useState } from "react";
import Table from "./Table";
import { clientData } from "../constant";
import AddNewClient from "./AddNewClient";
import Header from "./Header";
import EditClient from "./EditClient";
function Index() {
  const [client, setClient] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("client_data"));
    if (data && data.length > 0) {
      setClient(data);
    } else {
      setClient(clientData);
    }
  }, []);
  // edit client data

  function handleEdit(id) {
    const [data] = client.filter((item) => item.id === id);
    setEditClient(data);
    setIsEditing(true);
  }

  // function for remove client data
  function handleDelete(id) {
    const per = confirm("Are You Sure To delete");

    if (per) {
      const removedClient = client.filter((data) => data.id !== id);
      localStorage.setItem("client_data", JSON.stringify(removedClient));
      setClient(removedClient);
    }
  }

  return (
    <div className="p-5">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <Table
            client={client}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
      {isAdding && (
        <AddNewClient
          client={client}
          setClient={setClient}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <EditClient
          editClient={editClient}
          client={client}
          setClient={setClient}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Index;
