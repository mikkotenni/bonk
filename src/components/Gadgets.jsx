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
 * Gadgets
 * @description Fetch gadgets and render. Add and delete gadgets.
 * @returns {JSX.Element}
 */
export default function Gadgets() {
  // Server state management.
  // Access application QueryClient instance in context.
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gadgets"],
    queryFn: fetchGadgets,
    queryClient,
  });
  const addGadgetMutation = useMutation({
    mutationFn: addGadget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gadgets"] })
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

  // Rendering logic. Return specific states early.
  if (isLoading) return <p>Still loading gadgets...</p>;
  if (isError)
    return <p>This went south: {error.message}</p>;
  return (
    <div>
      <h1>Bonk gadgets</h1>
      <button type="button" onClick={handleAdd}>
        Add Gadget
      </button>
      {data.map((g) => (
        <Gadget key={g.id}>
          <h2>{g.name}</h2>
          <button type="button" onClick={() => handleDelete(g.id)}>
            Delete
          </button>
        </Gadget>
      ))}
    </div>
  );
}
