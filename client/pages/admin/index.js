import React from "react";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

function adminIndex() {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <h1 className="pb-5">Admin Dashboard</h1>
          <div className="row">
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/create/category-tag">
                    <a>Create</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">Rigth</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default adminIndex;
