import ServiceSection from "./components/ServiceSection";
import BackgroundSection from "./components/BackgroundSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-roboto">
      <main className="">
        <BackgroundSection
          heading="RENSON ACCOUNTING SOLUTIONS, LLC"
          subheading="Life in the Tax Lane"
          cta="Contact us for a Free Consultation"
        />
        {/* #here */}
        <div className=" flex flex-col lg:flex-row">
          <ServiceSection
            background="bg-taxprep"
            title="Tax Preparation"
            description="Are you looking for someone that can tackle your tax return needs? I have over 10 years experience dealing with Individual returns, LLC returns, Corporate returns, Partnership returns, Amended returns, Payroll returns and more."
          />

          <ServiceSection
            title="Full Service Business Solutions"
            description={
              <>
                Are you spending too much time dealing with the financial
                aspects of your business? With 10 years of experience in{" "}
                <span className="font-bold">
                  bookkeeping, payroll, sales tax, and income tax
                </span>
                , let me take care of all the numbers so that you can spend more
                time running your business.
              </>
            }
            background="bg-fullservice"
          />
          <ServiceSection
            title="Tax Planning & Consulting"
            description="We analyze your business to find all of the legal tax loopholes that can save you tens of thousands of dollars per year in taxes!"
            background="bg-taxplanning"
          />
        </div>
        {/*
        <BackgroundSection
          heading="Contact Us now"
          subheading="We will get it done."
          cta="Call us at (954) 439-1758"
        />
        */}
      </main>
      <Footer />
    </div>
  );
}
