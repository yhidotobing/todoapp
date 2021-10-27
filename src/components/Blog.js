import { useParams } from "react-router-dom";

const Blog = () => {
  const { namaBlog } = useParams();
  return (
    <div>
      <h1>Ini {namaBlog}</h1>
    </div>
  );
};

export default Blog;
