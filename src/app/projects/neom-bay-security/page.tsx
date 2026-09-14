import ProjectPage from '../ProjectPage';

export default function NeomBaySecurityPage() {
  return (
    <ProjectPage
      title="National Integrated Project for NEOM Bay Airport Security & Protection"
      subtitle="Advanced geotechnical investigation supporting security infrastructure at NEOM Bay Airport"
      heroImage="/images/project-2.jpeg"
      status="Approved"
      client="NEOM Company"
      location="NEOM Bay, Saudi Arabia"
      secondaryImages={["/images/about-cpt-rig.jpeg"]}
      description={[
        "ATLAS GES contributed to the National Integrated Project for NEOM Bay Airport, providing critical geotechnical and geophysical investigation services for the security and protection infrastructure.",
        "This flagship project required comprehensive subsurface investigations across the NEOM Bay Airport perimeter, including advanced in-situ testing and detailed site characterization to support the design of security installations in challenging terrain.",
        "Our work ensured that the airport's security and protection systems are built on thoroughly characterized foundations, meeting the high standards demanded by NEOM's vision for next-generation infrastructure.",
      ]}
      scope={[
        {
          heading: "Site Investigation",
          items: [
            "Deep Borehole Drilling Program",
            "Cone Penetration Testing (CPT)",
            "Pressuremeter Testing",
            "Groundwater Monitoring",
            "Perimeter Geotechnical Survey",
            "Terrain Analysis & Classification",
          ],
        },
        {
          heading: "Laboratory & Analysis",
          items: [
            "Advanced Soil Testing",
            "Chemical Analysis of Soil & Water",
            "Compaction Characteristics",
            "Shear Strength Determination",
            "Consolidation Testing",
            "Corrosivity Assessment",
          ],
        },
        {
          heading: "Engineering Support",
          items: [
            "Foundation Design Parameters",
            "Pavement Design Recommendations",
            "Earthwork Specifications",
            "Slope Stability Analysis",
            "Ground Improvement Guidance",
            "Construction Phase Advisory",
          ],
        },
      ]}
    />
  );
}
