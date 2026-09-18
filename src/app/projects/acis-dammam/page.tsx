import ProjectPage from '../ProjectPage';

export default function AcisDammamPage() {
  return (
    <ProjectPage
      title="Automatic Cargo Integrated Screening (ACIS)"
      titleAr="الفحص المتكامل للشحنات الآلي (ACIS)"
      subtitle="Comprehensive geotechnical and geophysical investigation for the ACIS facility at King Fahad International Airport"
      subtitleAr="تحقيق جيوتقني وجيوفيزيائي شامل لمنشأة ACIS في مطار الملك فهد الدولي"
      heroImage="/images/project-1.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="King Fahad International Airport Authority"
      clientAr="هيئة مطار الملك فهد الدولي"
      location="Dammam, Saudi Arabia"
      locationAr="الدمام، المملكة العربية السعودية"
      secondaryImages={["/images/service-geotechnical-lab.jpeg"]}
      description={[
        "ATLAS GES was commissioned to perform a full geotechnical and geophysical investigation for the Automatic Cargo Integrated Screening (ACIS) facility at King Fahad International Airport in Dammam.",
        "The project involved extensive subsurface exploration including borehole drilling, in-situ testing, and laboratory analysis to characterize foundation conditions for this critical airport security infrastructure.",
        "Our team delivered detailed geotechnical reports with foundation design recommendations, ensuring the ACIS facility meets the stringent structural and safety requirements of international airport operations.",
      ]}
      descriptionAr={[
        "كُلّفت أطلس بإجراء تحقيق جيوتقني وجيوفيزيائي كامل لمنشأة الفحص المتكامل للشحنات الآلي (ACIS) في مطار الملك فهد الدولي بالدمام.",
        "تضمّن المشروع استكشافاً واسعاً لما تحت السطح شمل حفر الآبار والاختبار الموضعي والتحليل المعملي لتوصيف ظروف الأساسات لهذه البنية التحتية الأمنية الحيوية للمطار.",
        "قدّم فريقنا تقارير جيوتقنية تفصيلية مع توصيات تصميم الأساسات، بما يضمن استيفاء منشأة ACIS للمتطلبات الإنشائية ومتطلبات السلامة الصارمة لعمليات المطارات الدولية.",
      ]}
      scope={[
        {
          heading: "Geotechnical Investigation",
          headingAr: "التحقيق الجيوتقني",
          items: [
            "Borehole Drilling & Sampling",
            "Standard Penetration Testing (SPT)",
            "Foundation Condition Assessment",
            "Soil Classification & Laboratory Testing",
            "Bearing Capacity Analysis",
            "Settlement Analysis",
          ],
          itemsAr: [
            "حفر الآبار وأخذ العينات",
            "اختبار الاختراق القياسي (SPT)",
            "تقييم ظروف الأساسات",
            "تصنيف التربة والاختبار المعملي",
            "تحليل قدرة التحمل",
            "تحليل الهبوط",
          ],
        },
        {
          heading: "Geophysical Survey",
          headingAr: "المسح الجيوفيزيائي",
          items: [
            "Seismic Refraction Surveys",
            "Subsurface Profiling",
            "Ground Condition Mapping",
            "Resistivity Testing",
            "Bedrock Depth Determination",
            "Site Characterization",
          ],
          itemsAr: [
            "مسوحات الانكسار الزلزالي",
            "التصوير المقطعي لما تحت السطح",
            "رسم خرائط ظروف الأرض",
            "اختبار المقاومية",
            "تحديد عمق الصخر الأساسي",
            "توصيف الموقع",
          ],
        },
        {
          heading: "Deliverables",
          headingAr: "المخرجات",
          items: [
            "Detailed Geotechnical Report",
            "Foundation Design Recommendations",
            "Borehole Logs & Test Results",
            "Geophysical Survey Maps",
            "Risk Assessment Report",
            "Construction Supervision Support",
          ],
          itemsAr: [
            "تقرير جيوتقني تفصيلي",
            "توصيات تصميم الأساسات",
            "سجلات الآبار ونتائج الاختبارات",
            "خرائط المسوحات الجيوفيزيائية",
            "تقرير تقييم المخاطر",
            "دعم الإشراف على الإنشاء",
          ],
        },
      ]}
    />
  );
}
