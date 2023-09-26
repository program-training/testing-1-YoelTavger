export async function fetchUserData(id: number) {
  return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (data) => data.json()
  );
}
