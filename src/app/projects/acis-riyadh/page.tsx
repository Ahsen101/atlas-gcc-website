import ProjectPage from '../ProjectPage';

export default function AcisRiyadhPage() {
  return (
    <ProjectPage
      title="Automatic Cargo Integrated Screening (ACIS)"
      subtitle="Geotechnical and subsurface investigation for the ACIS facility at King Khalid International Airport"
      heroImage="/images/project-3.jpeg"
      status="Approved"
      client="King Khalid International Airport Authority"
      location="Riyadh, Saudi Arabia"
      secondaryImages={["/images/service-geophysical-seismic.jpeg"]}
      description={[
        "Building on our successful delivery at King Fahad International Airport, ATLAS GES was selected to perform the geotechnical investigation for the ACIS facility at King Khalid International Airport in Riyadh.",
        "The Riyadh site presented unique geological conditions requiring specialized investigation techniques, including deep borehole drilling through variable subsurface strata and comprehensive laboratory testing programs.",
        "Our geotechnical engineers provided detailed foundation recommendations tailored to the specific ground conditions at the Riyadh site, ensuring safe and efficient construction of this critical cargo screening infrastructure.",
      ]}
      scope={[
        {
          heading: "Field Investigation",
          items: [
            "Rotary Core Drilling",
            "Standard Penetration Testing (SPT)",
            "Dynamic Cone Penetration Testing",
            "In-Situ Permeability Tests",
            "Groundwater Level Monitoring",
            "Disturbed & Undisturbed Sampling",
          ],
        },
        {
          heading: "Laboratory Program",
          items: [
            "Grain Size Distribution Analysis",
            "Atterberg Limits Testing",
            "Unconfined Compressive Strength",
            "Direct Shear Testing",
            "California Bearing Ratio (CBR)",
            "Moisture-Density Relationship",
          ],
        },
        {
          heading: "Reporting & Design",
          items: [
            "Comprehensive Geotechnical Report",
            "Foundation Type Recommendations",
            "Allowable Bearing Pressure Analysis",
            "Settlement Predictions",
            "Excavation Support Recommendations",
            "Quality Assurance Documentation",
          ],
        },
      ]}
    />
  );
}
