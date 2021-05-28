export const getAllCharacters = async () => {
  const res = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters`
  );
  const results = await res.json();

  return results.map((character) => {
    return {
      id: character._id,
      name: character.name,
      image: character.image,
    };
  });
};

export async function fetchSingleCharacter(id) {
  const res = await fetch(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`
  );
  const results = await res.json();
  const array = [];
  array.push(results);

  return array.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
}
