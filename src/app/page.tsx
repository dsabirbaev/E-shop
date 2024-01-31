
import Product from "@/components/Product";


export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-52">
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">
           SHOPPING VENUE
        </h1>

        <div> 
          {
            products.map((item) => (
              <Product key={item.id} product={item}/>
            ))
          }
        </div>
      </section>
    </main>
  );
}
