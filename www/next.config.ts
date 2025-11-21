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
      /*
      Resources & Assets
      */
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
      {
        source: '/Managing_Risk_for_High-Net-Worth_Clients_Rough_Notes_June_2017_50-54_1.pdf',
        destination: '/resources/managing-risk-for-high-net-worth-clients.pdf',
        permanent: true,
      },

      /*
      Pages
      */
      {
        source: '/partners/insurers/',
        destination: '/partners/insurers-brokers',
        permanent: true,
      },

      {
        source:
          '/about/art-guard-introduces-map-advanced-wireless-protection-system-art-valuables/',
        destination: '/about/art-guard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// https://www.artguard.net/partners/insurers/
