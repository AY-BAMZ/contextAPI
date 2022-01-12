import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  getPokemon,
  getPokemonAbility,
} from "../APIIntegration/queries/pokemons";

function QueryPost() {
  const [counter, setCounter] = useState(0);

  const { data, isLoading, refetch } = useQuery(
    ["pokemon", { id: counter }],
    getPokemon
  );

  const {
    data: abilityData,
    isLoading: abilityIsLoading,
    mutate: mutateAbility,
  } = useMutation(getPokemonAbility, { mutationKey: "getPokeAbby" });

  const handleAbilityFetch = (id) => {
    mutateAbility({ id:id });
    refetch()
  };

  const handleDecrement = () => {
    if (counter - 1 > 0) setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}> Add +</button>
      <br />
      <button onClick={() => handleDecrement()}>minus -</button>

      <div>{counter}</div>

      {data && (
        <div>
          <h1>
            {data.id} {data.name}
          </h1>
          <h2>{data.height}</h2>
          <h3>Abilities</h3>
          {data.abilities.map((ability, index) => {
            return (
              <div key={index}>
                <h3>{ability.ability.name}</h3>
                <button onClick={() => handleAbilityFetch(ability.ability.name)}>Get Ability</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QueryPost;
