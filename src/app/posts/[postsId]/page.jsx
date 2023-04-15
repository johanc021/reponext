export default function PostId({ params }) {
  
  const { postsId } = params;
  
  return (
    <div>
      <h1>Este es el post {postsId}</h1>
    </div>
  );
}
