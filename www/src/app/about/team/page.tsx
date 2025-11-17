import * as Ui from "@/ui";

import BillAnderson from "@images/billanderson.jpg";

export default function TeamPage() {
  return (
    <div className="grid grid-cols-subgrid pt-16 col-span-full">
      <Ui.Sections.Team
        section={{
          heading: "Our Team",
          featuredFounder: {
            name: "Bill Anderson",
            title: "Founder/Managing Partner",
            bio: "Bill co-founded Art Guard in 2006 and has led product development, market strategy, and sales since inception. He co-developed the MAP sensor technology and brings decades of entrepreneurial experience across technology, media, and energy sectors. Prior roles include President/Publisher of The Atlantic Monthly and founder of database media and online ticketing companies.",
            image: {
              src: BillAnderson,
              alt: "Image of Bill Anderson",
            },
            linkedinUrl: "https://www.linkedin.com/in/billanderson4/",
          },
          secondaryFounder: {
            name: "Scott Richter",
            title: "Founder/Partner",
            bio: "Scott’s formal training is in industrial design. He worked for IBM for  eight years in that capacity and then turned to making art. Scott  invented, designed and patented the original Art Guard Safe Hook and  joined with Bill Anderson to launch Art Guard. Scott was the predominant influence for Art Guard’s development and patenting of the MAP  technology. Scott’s talent as an artist is evidenced by the national  museum and gallery display of his work that spans a 30-year career.  Among other awards, he received grants from the National Endowment for  the Arts in 1984 and 1986.",
          },
          boardOfAdvisors: [
            {
              name: "Peter Giacalone",
              bio: "Peter is a security industry consultant specializing in operational  structuring, strategic planning, market expansion, acquisitions, private equity capital placement and financial restructuring of security  related business. He works with notable global brands in the creation  and implementation of national dealer and affiliate programs,  specializing in central station services and monitoring of PERS  (Personal Emergency Response Systems) and remote video monitoring and  management. His 35 years of experience covers product and compliance  system design, DIY business deployment restructuring, access control  branding, business and sales management and acquisitions.",
            },
            {
              name: "Anthony Amore",
              bio: "An internationally recognized expert in the field of art theft and  security, Anthony has also worked in the homeland security field at the  federal level having worked in aviation and facility security as well as immigration enforcement. He has lectured in homeland security at the  college level in and provides commentary on security and terrorism  issues for a wide-range of local and national media outlets. Anthony is  the best-selling author of “Stealing Rembrandts” (2011). His second  book, “The Art of the Con,” was published in 2015 and was a New York  Times Best Seller in Crime. He is currently the Director of Security at  Boston’s Isabella Gardner Museum.",
            },
            {
              name: "Greg Smith",
              bio: "Greg is Executive VP at Berkley Asset protection. Continuing a family  legacy, Greg Smith started in the loss adjusting and loss control  business in 1987. He was trained by his world-renowned father, Harold J. Smith, in a firm called Smith Adjusters. For over 20 years, Greg has  been enhancing and refining his knowledge in the niche markets of fine  art, jewelers block, armored car, and crime from both the loss control  and adjusting perspectives. He has been instrumental in settling many of the most notable insurance claims and property recoveries in his fields of expertise over the past two decades. His experiences have enabled  him to foster extensive contacts in the International fine art &  jewelry communities and in law enforcement.",
            },
            {
              name: "Louis Parks",
              bio: "Louis is the Founder and CEO of SecureRF, a CT based company  specializing in the development of security technologies for the  “billions” of ultra-low resource things now connecting to the Internet  and whose futures will be significantly challenged by current advances  in quantum computing that will render almost all of our current security methods ineffective. SecureRF has developed an agreement protocol that  performs significantly better than ECC and RSA in both software and  hardware, allowing it to address the security needs of the smallest IoT  things. SecureRF is providing identification, authentication and data  protection to address advanced credentialing, sensors, and embedded  systems that will play an increasingly important role for security in  private and institutional settings.",
            },
            {
              name: "Chris Cummings",
              bio: "Chris is a senior executive with extensive international and domestic  experience in M&A transactions, corporate restructuring, public and  private venture and debt financing and IPO’s. Prior to his current  operating role as SVP of Corporate Development & Finance at an HR  cloud software company (Worktap) Chris advised the senior management and boards of companies, ranging from multinationals to early stage  businesses, on strategic, financial and operational initiatives. His 20+ year investment banking career included serving as head of Solomon,  Smith Barney’s Asia Pacific Industrial Development Banking Group in Hong Kong. Chris has a B.A. from Yale and an M.B.A from Harvard Business  School.",
            },
          ],
        }}
      />
    </div>
  );
}
