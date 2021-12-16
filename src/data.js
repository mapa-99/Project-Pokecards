var lista = [];
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const savePokemon = () => {
  for (let i = 0; i < 10; i++) {
    let aleatorio = getRandomInt(1, 150);
    getPokemones(aleatorio);
  } 
};
const getPokemones = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    lista.push(data);
  } catch (error) {
    console.log(error);
  }
}; 
savePokemon();
export default lista;

