import axios from "axios";
import URI_MAP from "../URI";

export const getPokemonAbility = async (options) => {
  const res = await axios.get(`${URI_MAP.pokemons.ability}${options.id}`);
  console.log(res.data)
  return res.data;
};

export const getPokemon = async ({queryKey}) => {
  const [queryName, options] = queryKey;
  const res = await axios.get(`${URI_MAP.pokemons.pokemon}${options.id}`);
  return res.data;
};
