import Layout from "../component/Layout/layout";
import StoreGrid from "../component/Store/StoreGrid";

function Store() {
  return (
    <Layout>
    <div className="bg-[#fbfafa] py-16">
      <div className="text-4xl font-medium text-center underline pb-16">
      <h1>
        Products
      </h1>
      </div>
     <StoreGrid/>
    </div>
    </Layout>
  );
}

export default Store;
