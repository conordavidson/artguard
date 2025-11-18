import * as Ui from "@/ui";

import Highvalueartinsurance from "@images/highvalueartinsurance.jpg";

export default function Insights() {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <Ui.Sections.ArticleHero
        section={{
          type: "ArticleHero",
          className: "md:-mt-nav-height",
          publishedAt: "10-31-2025",
          heading: "The Collector’s Guide to High-Value Art Insurance",
          author: "Bill Anderson",
          tags: ["news"],
          image: {
            src: Highvalueartinsurance,
            alt: "Image of high-value art insurance",
          },
        }}
      />
      <Ui.Sections.Text
        section={{
          type: "Text",
          className: "md:-mt-12",
          body: (
            <>
              <h2>
                Understanding How Proactive Protection Can Lower Your Costs
              </h2>
              <p>
                Acquiring fine art is a passion. Protecting it is a necessity.
                The first step for any serious collector is securing a
                comprehensive, high-value art insurance policy. But this
                essential coverage often comes with significant, recurring
                costs.
              </p>
              <p>
                Many collectors view insurance as a simple, reactive safety net.
                They overlook a critical factor that underwriters analyze:
                active, layered security.
              </p>
              <p>
                Relying on an insurance policy alone is a strategy for recovery,
                not prevention. True peace of mind comes from stopping a loss
                before it happens.
              </p>
              <h2>What Does High-Value Art Insurance Actually Cover?</h2>
              <p>
                Standard homeowner’s policies are not designed for fine art.
                They contain low coverage limits, high deductibles, and numerous
                exclusions.
              </p>
              <p>
                A specialized high-value art insurance policy is required. This
                takes the form of a “personal articles floater” or a standalone
                collection policy. This specialized coverage protects the
                financial value of your art against primary risks like theft,
                fire, and transit damage.
              </p>
              <p>
                However, the cost of this high-value art insurance is tied
                directly to the insurer’s assessment of your unique risk
                profile.
              </p>
              <h2>The Underwriter’s View: How Risk Dictates Your Premiums</h2>
              <p>
                When an underwriter assesses your collection for high-value art
                insurance, they are calculating the precise likelihood of a
                loss. They look at your location, the building’s construction,
                and your fire suppression systems.
              </p>
              <p>They also analyze your security.</p>
              <p>
                Most systems are perimeter-based: door contacts, window sensors,
                and motion detectors. These are important, but they leave a
                serious vulnerability.
              </p>
              <p>
                Insurers understand that once a thief bypasses this perimeter,
                these systems offer no further protection to your individual
                assets.{" "}
                <strong>
                  This gap increases your risk profile and, consequently, your
                  premiums.
                </strong>
              </p>
              <h3>The “Grab-and-Run” Gap in High-Value Art Insurance</h3>
              <p>
                Perimeter security only alerts you that a barrier has been
                breached. It does not protect the objects themselves. A thief
                can be in and out in minutes, long before a response team can
                arrive. This is the common “grab-and-run” theft.
              </p>
              <p>
                This specific vulnerability is a major concern for providers of
                high-value art insurance. It represents the weakest link in
                museum security and private collections alike.
              </p>
            </>
          ),
        }}
      />
    </div>
  );
}
