import Header from "../components/Header";

function Home() {
  return (
    <div className="relative bg-[url('./src/assets/bg.jpg')] bg-cover bg-center h-full w-full flex item-center justify-center">
      <div class="absolute inset-0 bg-[#0C1810]/60"></div>
      <Header />
      <div class="relative z-10">
        <h1>hi</h1>
      </div>
    </div>
  );
}

export default Home;
