import ProjectPage from '../ProjectPage';

export default function NewAirportAlJoufPage() {
  return (
    <ProjectPage
      title="New Airport Al Jouf"
      subtitle="Full-scope geotechnical and geophysical investigation for the new Al Jouf regional airport development"
      heroImage="/images/project-4.jpeg"
      status="Approved"
      client="General Authority of Civil Aviation (GACA)"
      location="Al Jouf Region, Saudi Arabia"
      secondaryImages={["/images/service-marine-mapping.jpeg"]}
      description={[
        "ATLAS GES was appointed to carry out comprehensive geotechnical and geophysical investigations for the new Al Jouf Airport, a greenfield airport development in the northern region of Saudi Arabia.",
        "The project encompassed extensive site characterization across the entire airport footprint, including runway alignments, terminal building areas, aprons, taxiways, and supporting infrastructure zones.",
        "Our multidisciplinary team deployed advanced field testing equipment and geophysical instruments to deliver a thorough understanding of the subsurface conditions, enabling optimized foundation and pavement design for the entire airport complex.",
      ]}
      scope={[
        {
          heading: "Geotechnical Campaign",
          items: [
            "Large-Scale Borehole Program",
            "Cone Penetration Testing (CPT)",
            "Plate Load Testing",
            "Field Density Testing",
            "Trial Pit Excavation & Logging",
            "Rock Core Recovery & RQD",
          ],
        },
        {
          heading: "Geophysical Surveys",
          items: [
            "Seismic Refraction Profiling",
            "Electrical Resistivity Imaging",
            "Ground Penetrating Radar (GPR)",
            "Cross-Hole Seismic Testing",
            "Dynamic Soil Properties Assessment",
            "Subsurface Anomaly Detection",
          ],
        },
        {
          heading: "Airport Engineering",
          items: [
            "Runway Foundation Design Support",
            "Pavement Subgrade Assessment",
            "Terminal Building Foundation Analysis",
            "Apron & Taxiway Ground Evaluation",
            "Earthwork Volume Calculations",
            "Construction Material Source Surveys",
          ],
        },
      ]}
    />
  );
}
