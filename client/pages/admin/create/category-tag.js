import React from "react";
import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";

function CategoryTag() {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <h1 className="pb-5">Manage Categories and Tags</h1>
          <div className="row">
            <div className="col-md-6">
              <Category />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default CategoryTag;
