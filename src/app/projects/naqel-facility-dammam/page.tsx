import ProjectPage from '../ProjectPage';

export default function NaqelFacilityDammamPage() {
  return (
    <ProjectPage
      title="Extension of Naqel Facility"
      subtitle="Geotechnical investigation for the expansion of Naqel logistics facility at King Fahad International Airport"
      heroImage="/images/hero-drilling-rig.jpeg"
      status="Approved"
      client="Naqel Express / King Fahad International Airport"
      location="Dammam, Saudi Arabia"
      secondaryImages={["/images/about-drilling-team.jpeg"]}
      description={[
        "ATLAS GES was engaged to provide geotechnical investigation services for the extension of the Naqel logistics and cargo handling facility at King Fahad International Airport in Dammam.",
        "The project required careful investigation of ground conditions adjacent to existing operational structures, necessitating low-vibration drilling techniques and precise subsurface profiling to avoid disruption to ongoing airport logistics operations.",
        "Our team delivered comprehensive foundation design parameters for the facility extension, including recommendations for foundation systems compatible with the existing structures and assessment of potential construction impacts on adjacent buildings.",
      ]}
      scope={[
        {
          heading: "Site Investigation",
          items: [
            "Borehole Drilling Adjacent to Structures",
            "Low-Vibration Investigation Techniques",
            "Standard Penetration Testing (SPT)",
            "Groundwater Assessment",
            "Utility Detection & Avoidance",
            "Existing Foundation Assessment",
          ],
        },
        {
          heading: "Analysis & Testing",
          items: [
            "Soil Bearing Capacity Analysis",
            "Differential Settlement Assessment",
            "Soil-Structure Interaction Study",
            "Chemical Testing for Aggressivity",
            "Compaction Testing",
            "Material Compatibility Analysis",
          ],
        },
        {
          heading: "Design Recommendations",
          items: [
            "Extension Foundation Design Parameters",
            "Construction Methodology Guidance",
            "Vibration Impact Assessment",
            "Dewatering Recommendations",
            "Ground Improvement Options",
            "Construction Monitoring Plan",
          ],
        },
      ]}
    />
  );
}
