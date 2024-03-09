import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchGadgets, deleteGadget, addGadget } from "../api/api";
import styled from "styled-components";

const Gadget = styled.article`
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  & > h2 {
    margin: 0 0 12px;
  }
`;

/**
 * @description Render a gadget.
 * @param {string} id
 * @param {string} name
 * @param {function} onDelete
 * @returns {JSX.Element}
 */
export function GadgetItem({ id, name, onDelete }) {
  return (
    <Gadget data-testid={id}>
      <h2>{name}</h2>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </Gadget>
  );
}

/**
 * @description Fetch gadgets and render. Add and delete gadgets.
 * @returns {JSX.Element}
 */
export default function Gadgets() {
  // Server state management. Access context QueryClient instance (App.js).
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gadgets"],
    queryFn: fetchGadgets,
    queryClient,
  });
  const addGadgetMutation = useMutation({
    mutationFn: addGadget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gadgets"] });
    },
  });
  const deleteGadgetMutation = useMutation({
    mutationFn: deleteGadget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gadgets"] });
    },
  });

  // Handlers.
  const handleDelete = (id) => deleteGadgetMutation.mutate(id);
  const handleAdd = () => {
    const d = new Date().toISOString();
    addGadgetMutation.mutate({ id: d, name: `Gadget ${d}` });
  };

  /**
   * Rendering logic. Return specific states early. Avoid creating new
   * inline handler on every render by using `GadgetItem`.
   */
  if (isLoading) return <p>Still loading gadgets...</p>;
  if (isError)
    return (
      <p>
        This went south: {error.message}. Make sure that json-server is running.
        Please see README for more details.
      </p>
    );
  return (
    <div data-testid="gadgets">
      <h1>Gadgets</h1>
      <button type="button" onClick={handleAdd}>
        Add gadget
      </button>
      {data.map(({ id, name }) => (
        <GadgetItem
          key={id}
          id={id}
          name={name}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </div>
  );
}