import { Link, Outlet, useNavigate } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        {/* // todo, birisi link diğeri button olarak yapılabilir örnek olması için */}
        {/* <Link to="fullstack" className="btn btn-success w-50"> */}
        {/* //* default page yokken böyle yazılır*/}
        {/* <Link to="" className="btn btn-success w-50"> */}
        {/* //* default page varken böyle yazılır, relative*/}
        <Link to="/paths" className="btn btn-success w-50">
          {/* //* default page varken böyle yazılır, absolute*/}
          {/* <Link className="btn btn-success w-50" to="fullstack"> */}
          {/* //* default page varken böyle yazılır, urlde linki çıksın diye*/}
          Fullstack
        </Link>
        <button
          onClick={() => navigate("aws")}
          className="btn btn-warning w-50"
        >
          Aws-Devops
        </button>
      </div>
      <Outlet />
      {/* //todo, nested route oluşumunda açılacak olan yeni component için yer tutuyor */}
    </div>
  );
};

export default Paths;
