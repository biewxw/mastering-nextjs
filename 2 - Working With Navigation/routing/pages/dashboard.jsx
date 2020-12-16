const Dashboard = ({ name, bio, blog }) => (
  <>
    <h1>{name}</h1>
    <p>Bio: {bio}</p>
    <p>Blog: {blog}</p>
  </>
);

Dashboard.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/biewxw");
  const user = await response.json();

  return user;
};

export default Dashboard;
