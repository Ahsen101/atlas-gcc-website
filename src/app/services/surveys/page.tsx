import ServicePage from '../ServicePage';

export default function SurveysPage() {
  return (
    <ServicePage
      title="Survey Services"
      titleAr="خدمات المساحة"
      subtitle="Precision land and marine surveying with integrated hydrographic, topographic, and bathymetric capabilities"
      subtitleAr="مساحة برية وبحرية دقيقة بقدرات هيدروغرافية وطبوغرافية وباثيمترية متكاملة"
      heroImage="/images/service-bathymetric.jpeg"
      secondaryImages={["/images/about-surveyor.jpeg"]}
      description={[
        "ATLAS GES provides comprehensive land and marine surveying services including aerial topographic surveys, utility location surveys, global positioning surveys, geographical information systems, and marine hydrographic surveys.",
        "In association with our international partners, we deliver integrated hydrographic, topographic, and bathymetric surveys for projects ranging from coastal infrastructure to offshore developments.",
        "Our survey teams are equipped with the latest positioning and measurement technology, ensuring the highest accuracy for engineering design, construction monitoring, and as-built verification.",
      ]}
      descriptionAr={[
        "تقدم أطلس خدمات مساحة برية وبحرية شاملة تشمل المسوحات الطبوغرافية الجوية، ومسوحات تحديد المرافق، ومسوحات تحديد المواقع العالمية، ونظم المعلومات الجغرافية، والمسوحات الهيدروغرافية البحرية.",
        "بالتعاون مع شركائنا الدوليين، نقدم مسوحات هيدروغرافية وطبوغرافية وباثيمترية متكاملة لمشاريع تتراوح من البنية التحتية الساحلية إلى التطويرات البحرية.",
        "فرق المساحة لدينا مجهزة بأحدث تقنيات تحديد المواقع والقياس، مما يضمن أعلى دقة للتصميم الهندسي، ومراقبة الإنشاء، والتحقق من الحالة النهائية للمنشآت.",
      ]}
      capabilities={[
        {
          heading: "Land Surveys",
          headingAr: "المسوحات البرية",
          items: [
            "Aerial Topographic Surveys",
            "Utility Location Surveys",
            "GPS & GIS Mapping",
            "3D Geological Modelling",
            "Construction Stakeout",
            "As-Built Verification",
          ],
          itemsAr: [
            "المسوحات الطبوغرافية الجوية",
            "مسوحات تحديد المرافق",
            "خرائط نظم تحديد المواقع والمعلومات الجغرافية (GPS/GIS)",
            "النمذجة الجيولوجية ثلاثية الأبعاد",
            "التوطين الإنشائي",
            "التحقق من الحالة النهائية للمنشآت",
          ],
        },
        {
          heading: "Marine & Hydrographic",
          headingAr: "البحرية والهيدروغرافية",
          items: [
            "Single Beam Echo Sounding",
            "Multi-Beam Bathymetric Surveys",
            "Sub-Bottom Marine Surveys",
            "Tidal Data Analysis",
            "Oceanographic & Bathymetric Data",
            "Met Ocean Observations",
          ],
          itemsAr: [
            "سبر الأعماق أحادي الحزمة",
            "المسوحات الباثيمترية متعددة الحزم",
            "المسوحات البحرية لقاع البحر",
            "تحليل بيانات المد والجزر",
            "البيانات الأوقيانوغرافية والباثيمترية",
            "الرصدات البحرية والجوية",
          ],
        },
        {
          heading: "Integrated Solutions",
          headingAr: "الحلول المتكاملة",
          items: [
            "Feasibility Study Surveys",
            "Integrated Turnkey Solutions",
            "Installation Support",
            "Commissioning Support",
            "System Training",
            "First-Line Troubleshooting",
          ],
          itemsAr: [
            "مسوحات دراسات الجدوى",
            "حلول متكاملة تسليم مفتاح",
            "دعم التركيب",
            "دعم التشغيل التجريبي",
            "التدريب على الأنظمة",
            "الدعم الفني للخط الأول",
          ],
        },
      ]}
    />
  );
}
