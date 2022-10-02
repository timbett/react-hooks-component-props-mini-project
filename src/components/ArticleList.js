import Article from "./Article";
function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}
export default ArticleList;
