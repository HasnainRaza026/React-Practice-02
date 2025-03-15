import Header from "../components/Header";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Pricing() {
  return (
    <div className="bg-[var(--bg-primary-color)] w-full h-full flex justify-center items-center">
      <Header />
      <div className="flex gap-[150px] items-center">
        <div className="flex flex-col gap-[30px] w-[505px]">
          <div className="flex flex-col">
            <Heading>Simple pricing.</Heading>
            <Heading>Just $9/month.</Heading>
          </div>
          <Paragraph classToAdd="text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </Paragraph>
        </div>
        <img
          className="w-[365px] h-[365px]"
          src="./src/assets/img-1.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Pricing;
