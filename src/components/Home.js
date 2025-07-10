import BlogList from './BlogList';
// import blogs from '../data/blogs';

const Home = ({ blogs }) => {
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
}

export default Home; 