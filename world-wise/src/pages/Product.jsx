import Header from "../components/Header";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Product() {
  return (
    <div className="bg-[var(--bg-primary-color)] w-full h-full flex justify-center items-center">
      <Header />
      <div className="flex gap-[150px] items-center">
        <img
          className="w-[365px] h-[365px]"
          src="./src/assets/img-2.jpg"
          alt="image"
        />
        <div className="flex flex-col gap-[30px] w-[505px]">
          <Heading>About WorldWise.</Heading>
          <Paragraph classToAdd="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </Paragraph>
          <Paragraph classToAdd="text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

export default Product;
