import ProjectPage from '../ProjectPage';

export default function AcisRiyadhPage() {
  return (
    <ProjectPage
      title="Automatic Cargo Integrated Screening (ACIS)"
      titleAr="الفحص المتكامل للشحنات الآلي (ACIS)"
      subtitle="Geotechnical and subsurface investigation for the ACIS facility at King Khalid International Airport"
      subtitleAr="تحقيق جيوتقني وتحت سطحي لمنشأة ACIS في مطار الملك خالد الدولي"
      heroImage="/images/project-3.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="King Khalid International Airport Authority"
      clientAr="هيئة مطار الملك خالد الدولي"
      location="Riyadh, Saudi Arabia"
      locationAr="الرياض، المملكة العربية السعودية"
      secondaryImages={["/images/service-geophysical-seismic.jpeg"]}
      description={[
        "Building on our successful delivery at King Fahad International Airport, ATLAS GES was selected to perform the geotechnical investigation for the ACIS facility at King Khalid International Airport in Riyadh.",
        "The Riyadh site presented unique geological conditions requiring specialized investigation techniques, including deep borehole drilling through variable subsurface strata and comprehensive laboratory testing programs.",
        "Our geotechnical engineers provided detailed foundation recommendations tailored to the specific ground conditions at the Riyadh site, ensuring safe and efficient construction of this critical cargo screening infrastructure.",
      ]}
      descriptionAr={[
        "بناءً على إنجازنا الناجح في مطار الملك فهد الدولي، اختيرت أطلس لإجراء التحقيق الجيوتقني لمنشأة ACIS في مطار الملك خالد الدولي بالرياض.",
        "قدّم موقع الرياض ظروفاً جيولوجية فريدة تطلّبت تقنيات تحقيق متخصصة، شملت حفر الآبار العميقة عبر طبقات متغيرة تحت السطح وبرامج اختبار معملي شاملة.",
        "قدّم مهندسونا الجيوتقنيون توصيات تفصيلية للأساسات مصممة خصيصاً لظروف الأرض في موقع الرياض، بما يضمن إنشاءً آمناً وفعالاً لهذه البنية التحتية الحيوية لفحص الشحنات.",
      ]}
      scope={[
        {
          heading: "Field Investigation",
          headingAr: "التحقيق الحقلي",
          items: [
            "Rotary Core Drilling",
            "Standard Penetration Testing (SPT)",
            "Dynamic Cone Penetration Testing",
            "In-Situ Permeability Tests",
            "Groundwater Level Monitoring",
            "Disturbed & Undisturbed Sampling",
          ],
          itemsAr: [
            "الحفر الدوراني للباب الصخري",
            "اختبار الاختراق القياسي (SPT)",
            "اختبار الاختراق المخروطي الديناميكي",
            "اختبارات النفاذية الموضعية",
            "مراقبة منسوب المياه الجوفية",
            "أخذ العينات المضطربة وغير المضطربة",
          ],
        },
        {
          heading: "Laboratory Program",
          headingAr: "البرنامج المعملي",
          items: [
            "Grain Size Distribution Analysis",
            "Atterberg Limits Testing",
            "Unconfined Compressive Strength",
            "Direct Shear Testing",
            "California Bearing Ratio (CBR)",
            "Moisture-Density Relationship",
          ],
          itemsAr: [
            "تحليل توزيع أحجام الحبيبات",
            "اختبار حدود أتربرغ",
            "مقاومة الانضغاط غير المحصور",
            "اختبار القص المباشر",
            "نسبة تحمل كاليفورنيا (CBR)",
            "علاقة الرطوبة بالكثافة",
          ],
        },
        {
          heading: "Reporting & Design",
          headingAr: "التقارير والتصميم",
          items: [
            "Comprehensive Geotechnical Report",
            "Foundation Type Recommendations",
            "Allowable Bearing Pressure Analysis",
            "Settlement Predictions",
            "Excavation Support Recommendations",
            "Quality Assurance Documentation",
          ],
          itemsAr: [
            "تقرير جيوتقني شامل",
            "توصيات نوع الأساسات",
            "تحليل ضغط التحمل المسموح به",
            "توقعات الهبوط",
            "توصيات دعم الحفر",
            "توثيق ضمان الجودة",
          ],
        },
      ]}
    />
  );
}
