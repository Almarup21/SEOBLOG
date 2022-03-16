import React from "react";
import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";

function userIndex() {
  return (
    <Layout>
      <Private>
        <div className="container">
          <h1>User Dashboard</h1>
        </div>
      </Private>
    </Layout>
  );
}

export default userIndex;
