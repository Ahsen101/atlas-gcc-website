import ProjectPage from '../ProjectPage';

export default function AcisDammamPage() {
  return (
    <ProjectPage
      title="Automatic Cargo Integrated Screening (ACIS)"
      subtitle="Comprehensive geotechnical and geophysical investigation for the ACIS facility at King Fahad International Airport"
      heroImage="/images/project-1.jpeg"
      status="Approved"
      client="King Fahad International Airport Authority"
      location="Dammam, Saudi Arabia"
      secondaryImages={["/images/service-geotechnical-lab.jpeg"]}
      description={[
        "ATLAS GES was commissioned to perform a full geotechnical and geophysical investigation for the Automatic Cargo Integrated Screening (ACIS) facility at King Fahad International Airport in Dammam.",
        "The project involved extensive subsurface exploration including borehole drilling, in-situ testing, and laboratory analysis to characterize foundation conditions for this critical airport security infrastructure.",
        "Our team delivered detailed geotechnical reports with foundation design recommendations, ensuring the ACIS facility meets the stringent structural and safety requirements of international airport operations.",
      ]}
      scope={[
        {
          heading: "Geotechnical Investigation",
          items: [
            "Borehole Drilling & Sampling",
            "Standard Penetration Testing (SPT)",
            "Foundation Condition Assessment",
            "Soil Classification & Laboratory Testing",
            "Bearing Capacity Analysis",
            "Settlement Analysis",
          ],
        },
        {
          heading: "Geophysical Survey",
          items: [
            "Seismic Refraction Surveys",
            "Subsurface Profiling",
            "Ground Condition Mapping",
            "Resistivity Testing",
            "Bedrock Depth Determination",
            "Site Characterization",
          ],
        },
        {
          heading: "Deliverables",
          items: [
            "Detailed Geotechnical Report",
            "Foundation Design Recommendations",
            "Borehole Logs & Test Results",
            "Geophysical Survey Maps",
            "Risk Assessment Report",
            "Construction Supervision Support",
          ],
        },
      ]}
    />
  );
}
