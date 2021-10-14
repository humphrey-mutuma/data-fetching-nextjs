export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <div>
      <h1 className="p-1 m-1 cursor-pointer bg-blue-200 w-max rounded-md">
        <span className="text-white">Title </span> <br />
        {post.title}
      </h1>
      <p className="p-1 m-1 cursor-pointer bg-red-200 w-max rounded-md">
        <span className="text-white">Body </span> <br />
        {post.body}
      </p>
    </div>
  );
};

export default Details;
