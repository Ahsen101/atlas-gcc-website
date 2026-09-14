import ProjectPage from '../ProjectPage';

export default function NeomBayGeotechnicalPage() {
  return (
    <ProjectPage
      title="NEOM Bay Airport — Geotechnical & Geophysical Investigation"
      subtitle="Integrated geotechnical and geophysical investigation for the NEOM Bay Airport megaproject"
      heroImage="/images/service-bathymetric.jpeg"
      status="Approved"
      client="NEOM Company"
      location="NEOM Bay, Saudi Arabia"
      secondaryImages={["/images/service-geological-terrain.jpeg"]}
      description={[
        "ATLAS GES was engaged to perform an integrated geotechnical and geophysical investigation campaign for the NEOM Bay Airport, one of the Kingdom's most ambitious aviation infrastructure developments.",
        "The investigation covered the full extent of the airport development footprint, combining advanced borehole drilling, in-situ testing, and state-of-the-art geophysical surveys to produce a comprehensive ground model of the site.",
        "Our multidisciplinary approach delivered a unified subsurface dataset that enabled optimized design of runway pavements, terminal foundations, and supporting infrastructure across the complex and varied geological conditions of the NEOM Bay area.",
      ]}
      scope={[
        {
          heading: "Geotechnical Program",
          items: [
            "Deep Borehole Drilling (50m+ depth)",
            "Cone Penetration Testing with Pore Pressure (CPTu)",
            "Pressuremeter & Dilatometer Testing",
            "Large-Diameter Trial Pits",
            "Groundwater Regime Characterization",
            "Undisturbed Block Sampling",
          ],
        },
        {
          heading: "Geophysical Campaign",
          items: [
            "Multi-Channel Seismic Refraction (MASW)",
            "2D Electrical Resistivity Tomography",
            "Downhole Seismic Testing",
            "Seismic Hazard Assessment",
            "Vs30 Site Classification",
            "Integrated Subsurface Modelling",
          ],
        },
        {
          heading: "Engineering Outputs",
          items: [
            "3D Ground Model Development",
            "Seismic Design Parameters",
            "Runway & Taxiway Subgrade Report",
            "Foundation Recommendations by Zone",
            "Ground Improvement Strategy",
            "Geotechnical Risk Register",
          ],
        },
      ]}
    />
  );
}
