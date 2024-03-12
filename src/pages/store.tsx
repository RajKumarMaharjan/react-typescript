import StoreGrid from "../component/Layout/StoreGrid";

function Store() {
  return (
    <div className="bg-[#fbfafa] py-16">
      <h1 className="text-4xl font-medium text-center underline pb-16">
        Products
      </h1>
     <StoreGrid/>
    </div>
  );
}

export default Store;
