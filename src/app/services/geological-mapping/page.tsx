import ServicePage from '../ServicePage';

export default function GeologicalMappingPage() {
  return (
    <ServicePage
      title="Geological Mapping Services"
      titleAr="خدمات الخرائط الجيولوجية"
      subtitle="Expert geological surveys for roads, dams, airports, and mineral exploration projects"
      subtitleAr="مسوحات جيولوجية متخصصة للطرق والسدود والمطارات ومشاريع استكشاف المعادن"
      heroImage="/images/service-geological-terrain.jpeg"
      secondaryImages={["/images/service-geological-map.jpeg"]}
      description={[
        "ATLAS extends geological survey services to both private and government sectors for a wide range of project types. Our geologists perform detailed geological surveys and prepare proper geological maps for projects such as roads, dams, airports, construction material quarries, and mineral quarries.",
        "Our work includes sampling, preparation, and testing of samples. Our geologists are equipped with proper geophysical instruments such as resistivity meters and seismographs to ensure comprehensive geological assessment.",
        "We provide technical expertise, operation management, and training in different geoscience topics — from 3D modelling to mineral exploration and resource estimation.",
      ]}
      descriptionAr={[
        "تقدم أطلس خدمات المسح الجيولوجي لكل من القطاعين الخاص والحكومي لمجموعة واسعة من أنواع المشاريع. يجري الجيولوجيون لدينا مسوحات جيولوجية تفصيلية ويعدّون خرائط جيولوجية دقيقة لمشاريع مثل الطرق والسدود والمطارات ومحاجر مواد البناء ومحاجر المعادن.",
        "يشمل عملنا أخذ العينات وإعدادها واختبارها. والجيولوجيون لدينا مجهزون بأجهزة جيوفيزيائية مناسبة مثل أجهزة قياس المقاومية وأجهزة رصد الزلازل لضمان تقييم جيولوجي شامل.",
        "نقدم الخبرة الفنية وإدارة العمليات والتدريب في مختلف مواضيع علوم الأرض — من النمذجة ثلاثية الأبعاد إلى استكشاف المعادن وتقدير الموارد.",
      ]}
      capabilities={[
        {
          heading: "Mapping & Modelling",
          headingAr: "رسم الخرائط والنمذجة",
          items: [
            "3D Geological Modelling",
            "Geological Mapping & Analysis",
            "Drill Hole Data Analysis",
            "Stratigraphic Correlation",
            "Structural Geology Mapping",
            "Geomorphological Surveys",
          ],
          itemsAr: [
            "النمذجة الجيولوجية ثلاثية الأبعاد",
            "رسم الخرائط الجيولوجية وتحليلها",
            "تحليل بيانات آبار الحفر",
            "الربط الطبقي",
            "رسم خرائط الجيولوجيا البنيوية",
            "المسوحات الجيومورفولوجية",
          ],
        },
        {
          heading: "Exploration & Resources",
          headingAr: "الاستكشاف والموارد",
          items: [
            "Mineral Exploration",
            "Resources Estimation",
            "Construction Material Quarry Surveys",
            "Mineral Quarry Assessment",
            "Core Logging & Classification",
            "Geochemical Sampling",
          ],
          itemsAr: [
            "استكشاف المعادن",
            "تقدير الموارد",
            "مسوحات محاجر مواد البناء",
            "تقييم محاجر المعادن",
            "تسجيل اللباب الصخري وتصنيفه",
            "أخذ العينات الجيوكيميائية",
          ],
        },
        {
          heading: "Project Applications",
          headingAr: "تطبيقات المشاريع",
          items: [
            "Road Corridor Investigations",
            "Dam Site Geology",
            "Airport Foundation Studies",
            "Quarry & Borrow Pit Surveys",
            "Laboratory Analysis & Testing",
            "Technical Training & Advisory",
          ],
          itemsAr: [
            "تحقيقات ممرات الطرق",
            "جيولوجيا مواقع السدود",
            "دراسات أساسات المطارات",
            "مسوحات المحاجر ومواقع الاستعارة",
            "التحليل والاختبار المعملي",
            "التدريب الفني والاستشارات",
          ],
        },
      ]}
    />
  );
}
