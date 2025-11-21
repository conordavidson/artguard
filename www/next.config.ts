import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  redirects: async () => {
    return [
      {
        source: '/wp-content/uploads/2019/07/Art-Guard-MAP-System-Gold.pdf',
        destination: '/resources/artguard-map-system-gold.pdf',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2019/07/Art-Guard-MAP-345-sensor.pdf',
        destination: '/resources/artguard-map-345-sensor.pdf',
        permanent: true,
      },
      {
        source: '/resources/ArtGuard-MAPsensor-DataSheet.pdf',
        destination: '/resources/artguard-map-sensor-data-sheet.pdf',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2020/02/integrations2.pdf',
        destination: '/resources/integrations.pdf',
        permanent: true,
      },
      {
        source: '/partners/insurers/',
        destination: '/partners/insurers-brokers',
        permanent: true,
      },
      {
        source: '/resources/ArtGuard-MAPConservationist-curator-notes.pdf',
        destination: '/resources/artguard-map-conservationist-curator-notes.pdf',
        permanent: true,
      },
      {
        source: '/resources/ArtGuard-MAPforHistoricalMuseumsAndHouses.pdf',
        destination: '/resources/artguard-map-for-historical-museums-and-houses.pdf',
        permanent: true,
      },
      {
        source: '/resources/Enroll-MAP-sensors-into-DMP.pdf',
        destination: '/resources/enroll-map-sensors-into-dmp.pdf',
        permanent: true,
      },
      {
        source: '/resources/Art-Guard-White-Paper_OSP.pdf',
        destination: '/resources/art-guard-white-paper-osp.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// https://www.artguard.net/wp-content/uploads/2019/07/Art-Guard-MAP-System-Gold.pdf
// https://www.artguard.net/resources/Art-Guard-MAP-345-sensor.pdf
// https://www.artguard.net/resources/ArtGuard-MAPsensor-DataSheet.pdf
// https://www.artguard.net/wp-content/uploads/2020/02/integrations2.pdf
// https://www.artguard.net/partners/insurers/
// https://www.artguard.net/resources/ArtGuard-MAPConservationist-curator-notes.pdf
// https://www.artguard.net/resources/ArtGuard-MAPforHistoricalMuseumsAndHouses.pdf
// https://www.artguard.net/resources/Enroll-MAP-sensors-into-DMP.pdf
// https://www.artguard.net/resources/Art-Guard-White-Paper_OSP.pdf
