export default function Category({ posts }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-10 post-date m-1 p-2m-auto">
          {posts.map((post, index) => {
            return <div key={index} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
