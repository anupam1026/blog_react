import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../data/blogs';

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find(b => b.id === id);

  return (
    <div className="blog-details">
      { !blog && <div>Blog not found.</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails; 