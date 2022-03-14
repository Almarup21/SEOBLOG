import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-center pt-4 pb-4">Signin</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <SigninComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
