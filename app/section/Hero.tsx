import Image from 'next/image';
import MaxWidthWrapper from '../components/mmw';

const Hero = () => {
  return (
    <section className=" text-slate-900 py-12">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 pr-8 flex flex-col md:flex-row items-center">
          {/* Left side: Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">What is ISA?</h1>
            <p className="text-lg md:text-xl mb-8">
              The International Society of Automation (ISA) is a non-profit professional association of engineers, technicians, and management engaged in industrial automation. As the globally trusted provider of foundational standards-based technical resources for the profession, ISA strives to build a better world through automation.
            </p>

          </div>
          {/* Right side: Images */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/img/img1.jpg"
                alt="Event 1"
                width={300}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="/img/img2.jpg"
                alt="Event 2"
                width={300}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="/img/img3.jpg"
                alt="Event 3"
                width={300}
                height={250}
                className="rounded-lg"
              />
              <Image
                src="/img/img4.jpg"
                alt="Event 4"
                width={300}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
