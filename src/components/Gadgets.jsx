import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGadgets } from "../api/api";

/**
 * Gadgets component
 * @description The Gadgets component fetches gadgets from the server and
 * displays them in a list.
 * @returns {JSX.Element}
 */
export default function Gadgets() {
  /**
   * The useQuery hook is used to fetch data from the server. Server state is
   * stored in the data variable and any additional state management is likely
   * not needed.
   */
  const { data, error, isLoading, isError } = useQuery({
    queryKey: "gadgets",
    queryFn: fetchGadgets,
  });

  if (isLoading) return <p>Still loading gadgets...</p>;
  if (isError) return <p>This went south: {error.message}</p>;
  return (
    <div>
      <h1>Gadgets</h1>
      {data.map((g) => (
        <div key={g.id}>
          <h2>{g.name}</h2>
        </div>
      ))}
    </div>
  );
}
