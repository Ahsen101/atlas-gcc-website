import ServicePage from '../ServicePage';

export default function GeophysicalPage() {
  return (
    <ServicePage
      title="Geophysical Services"
      titleAr="الخدمات الجيوفيزيائية"
      subtitle="Advanced non-invasive subsurface imaging for onshore and offshore engineering applications"
      subtitleAr="تصوير متقدم وغير تدخلي لما تحت السطح للتطبيقات الهندسية البرية والبحرية"
      heroImage="/images/service-seismic-field.jpeg"
      secondaryImages={["/images/service-geophysical.jpeg", "/images/service-gpr.jpeg"]}
      description={[
        "ATLAS GES is a leading provider of geophysical testing services in the Kingdom of Saudi Arabia and Bahrain. Our methods apply to all fields of engineering geophysics, both onshore and offshore.",
        "Our geophysical surveys use advanced non-invasive techniques to map subsurface conditions, detect anomalies, and characterize geological features. From seismic refraction to ground penetrating radar, we deploy the right technology for every site condition.",
        "We provide comprehensive borehole geophysical services including suspension logging, full-wave sonic logging, and cross-hole seismic tomography for detailed subsurface characterization.",
      ]}
      descriptionAr={[
        "تُعد أطلس مزوداً رائداً لخدمات الاختبارات الجيوفيزيائية في المملكة العربية السعودية والبحرين. وتُطبَّق أساليبنا على جميع مجالات الجيوفيزياء الهندسية، براً وبحراً.",
        "تستخدم مسوحاتنا الجيوفيزيائية تقنيات متقدمة وغير تدخلية لرسم خرائط الظروف تحت السطحية، والكشف عن الشذوذات، وتوصيف المعالم الجيولوجية. ومن الانكسار الزلزالي إلى رادار اختراق الأرض، ننشر التقنية المناسبة لكل ظرف من ظروف الموقع.",
        "نقدم خدمات جيوفيزيائية شاملة للآبار تشمل التسجيل بالتعليق، والتسجيل الصوتي الكامل الموجة، والتصوير المقطعي الزلزالي بين الآبار للحصول على توصيف تفصيلي لما تحت السطح.",
      ]}
      capabilities={[
        {
          heading: "Geophysical Investigations",
          headingAr: "التحقيقات الجيوفيزيائية",
          items: [
            "Seismic Refraction & Reflection",
            "Seismic Surface Waves (MASW/SASW)",
            "Electrical Resistivity Tomography (ERT)",
            "Vertical Electrical Sounding",
            "Ground Penetrating Radar (GPR)",
            "Vibration Monitoring",
          ],
          itemsAr: [
            "الانكسار والانعكاس الزلزالي",
            "الموجات السطحية الزلزالية (MASW/SASW)",
            "التصوير المقطعي للمقاومية الكهربائية (ERT)",
            "السبر الكهربائي الرأسي",
            "رادار اختراق الأرض (GPR)",
            "مراقبة الاهتزازات",
          ],
        },
        {
          heading: "Marine Geophysical Surveys",
          headingAr: "المسوحات الجيوفيزيائية البحرية",
          items: [
            "Sub-bottom Profiling",
            "Marine ERT Survey",
            "Side Scan Sonar Survey",
            "Marine Magnetometer Survey",
            "Marine Resistivity Imaging",
            "Bathymetric Survey (Single/Multi-beam)",
          ],
          itemsAr: [
            "التصوير المقطعي لقاع البحر",
            "مسح المقاومية الكهربائية البحري (ERT)",
            "مسح السونار الجانبي",
            "مسح المغناطيسية البحري",
            "التصوير المقاومي البحري",
            "المسح الباثيمتري (أحادي/متعدد الحزمة)",
          ],
        },
        {
          heading: "Borehole Geophysics",
          headingAr: "جيوفيزياء الآبار",
          items: [
            "PS Suspension Logging",
            "Full-Wave Sonic Logging",
            "Standard Down Hole Seismic",
            "Standard Cross Hole Seismic",
            "Cross Hole Seismic Tomography",
            "Seismic Cone Penetration Test (SCPT)",
          ],
          itemsAr: [
            "التسجيل بالتعليق (PS)",
            "التسجيل الصوتي الكامل الموجة",
            "المسح الزلزالي القياسي داخل البئر",
            "المسح الزلزالي القياسي بين الآبار",
            "التصوير المقطعي الزلزالي بين الآبار",
            "اختبار الاختراق المخروطي الزلزالي (SCPT)",
          ],
        },
      ]}
    />
  );
}
