import axios from "axios";
import URI_MAP from "../URI";

export const getPokemonAbility = async () => {
  const res = await axios.get(URI_MAP.pokemons.ability);
  return res.data;
};
