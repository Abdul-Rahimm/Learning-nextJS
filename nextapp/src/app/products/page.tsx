import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link href={"/"}>
        <h2>Home </h2>
      </Link>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}
