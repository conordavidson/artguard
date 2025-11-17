import * as Paths from "@/lib/paths";
import * as Ui from "@/ui";

import MapGold from "@images/mapgold.jpg";
import MapSilver from "@images/mapsilver.jpg";
import MapSensors from "@images/mapsensors.jpg";

export default function SecurityProducts() {
  return (
    <div className="grid grid-cols-subgrid space-y-24 col-span-full">
      <Ui.Sections.FeatureGrid
        section={{
          className: "pt-16",
          heading: "Art Guard Security Solutions",
          subheading: "Choose the right protection for your needs",
          items: [
            {
              heading: "MAP Sensors",
              subheading: "Triple-mode wireless sensor in 345 and 433 MHz",
              image: {
                src: MapSensors,
                alt: "Image of MAP Sensors",
              },
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Sensors",
                  href: Paths.MAP_SENSORS,
                  variant: "secondary",
                },
              ],
              body: (
                <>
                  <p>
                    Professional-grade wireless sensors that integrate with all
                    major security systems. Ideal for installers and
                    integrators.
                  </p>
                  <ul>
                    <li>Integrates with all major security systems</li>
                    <li>Triple-mode protection for any object</li>
                    <li>Available in 345 and 433 MHz frequencies</li>
                    <li>Museum-tested, conservator-approved</li>
                  </ul>
                </>
              ),
            },
            {
              heading: "MAP Gold System",
              subheading:
                "Complete standalone system with Alula Connect+ panel",
              image: {
                src: MapGold,
                alt: "Image of MAP Gold System",
              },
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Gold System",
                  href: Paths.MAP_SYSTEM,
                  variant: "secondary",
                },
              ],
              body: (
                <>
                  <p>
                    Complete standalone system for private collectors,
                    galleries, and smaller institutions. Control from your
                    phone, no installer required.
                  </p>
                  <ul>
                    <li>
                      Integrates with all major security systemsPlug-and-play
                      standalone solution
                    </li>
                    <li>Supports up to 96 wireless sensors</li>
                    <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                    <li>Built on Alula Connect+ panel</li>
                  </ul>
                </>
              ),
            },
            {
              heading: "MAP Silver System",
              subheading:
                "Complete standalone system with Alula Connect+ panel",
              image: {
                src: MapSilver,
                alt: "Image of MAP Silver System",
              },
              ctas: [
                {
                  type: "button",
                  label: "Explore MAP Silver System",
                  href: Paths.MAP_SYSTEM,
                  variant: "secondary",
                },
              ],
              body: (
                <>
                  <p>
                    Complete standalone system for private collectors,
                    galleries, and smaller institutions. Control from your
                    phone, no installer required.
                  </p>
                  <ul>
                    <li>
                      Integrates with all major security systemsPlug-and-play
                      standalone solution
                    </li>
                    <li>Supports up to 96 wireless sensors</li>
                    <li>Dual-path communication (4G LTE and Wi-Fi)</li>
                    <li>Built on Alula Connect+ panel</li>
                  </ul>
                </>
              ),
            },
          ],
        }}
      />
      <Ui.Sections.CtaCard
        section={{
          heading: "Let’s talk",
          subheading:
            "Whether you're ready to order, need technical specifications, or have questions about the right solution for your needs, we're here to help.",
          ctas: [
            {
              label: "(212) 989-1494",
              href: "tel:+12129891494",
              type: "link",
            },
            {
              label: "info@artguard.net",
              href: "mailto:info@artguard.net",
              type: "link",
            },
          ],
        }}
      />
    </div>
  );
}
