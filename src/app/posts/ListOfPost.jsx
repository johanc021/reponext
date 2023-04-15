import { LikedButton } from "./LikedButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default async function ListOfPost() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.created_at}</p>
          <LikedButton/>
        </article>
      ))}
    </>
  );
}
