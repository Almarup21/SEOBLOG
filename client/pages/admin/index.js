import React from "react";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";

function adminIndex() {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <h1>Admin Dashboard</h1>
        </div>
      </Admin>
    </Layout>
  );
}

export default adminIndex;
