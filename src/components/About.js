const About = () => {
  const user = localStorage.getItem("user");
  // cara untuk mengubah dari JSON ke javascript object
  const userObj = JSON.parse(user);

  console.log(user);
  console.log(userObj);
  return (
    <div>
      <h1>About</h1>
      <h3>My name is {userObj.alamat}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        labore facere deleniti quo quisquam, itaque asperiores vitae delectus
        nemo voluptate?
      </p>
    </div>
  );
};

export default About;
