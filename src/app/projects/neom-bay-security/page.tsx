import ProjectPage from '../ProjectPage';

export default function NeomBaySecurityPage() {
  return (
    <ProjectPage
      title="National Integrated Project for NEOM Bay Airport Security & Protection"
      titleAr="المشروع الوطني المتكامل لأمن وحماية مطار خليج نيوم"
      subtitle="Advanced geotechnical investigation supporting security infrastructure at NEOM Bay Airport"
      subtitleAr="تحقيق جيوتقني متقدم لدعم البنية التحتية الأمنية في مطار خليج نيوم"
      heroImage="/images/project-2.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="NEOM Company"
      clientAr="شركة نيوم"
      location="NEOM Bay, Saudi Arabia"
      locationAr="خليج نيوم، المملكة العربية السعودية"
      secondaryImages={["/images/about-cpt-rig.jpeg"]}
      description={[
        "ATLAS GES contributed to the National Integrated Project for NEOM Bay Airport, providing critical geotechnical and geophysical investigation services for the security and protection infrastructure.",
        "This flagship project required comprehensive subsurface investigations across the NEOM Bay Airport perimeter, including advanced in-situ testing and detailed site characterization to support the design of security installations in challenging terrain.",
        "Our work ensured that the airport's security and protection systems are built on thoroughly characterized foundations, meeting the high standards demanded by NEOM's vision for next-generation infrastructure.",
      ]}
      descriptionAr={[
        "ساهمت أطلس في المشروع الوطني المتكامل لمطار خليج نيوم، بتقديم خدمات تحقيق جيوتقني وجيوفيزيائي بالغة الأهمية للبنية التحتية للأمن والحماية.",
        "تطلّب هذا المشروع الرائد تحقيقات شاملة لما تحت السطح على امتداد محيط مطار خليج نيوم، شملت اختبارات موضعية متقدمة وتوصيفاً تفصيلياً للموقع لدعم تصميم المنشآت الأمنية في تضاريس صعبة.",
        "ضمن عملنا أن تُبنى أنظمة الأمن والحماية للمطار على أساسات موصّفة بدقة، بما يلبي المعايير العالية التي تتطلبها رؤية نيوم للبنية التحتية من الجيل القادم.",
      ]}
      scope={[
        {
          heading: "Site Investigation",
          headingAr: "التحقيق في الموقع",
          items: [
            "Deep Borehole Drilling Program",
            "Cone Penetration Testing (CPT)",
            "Pressuremeter Testing",
            "Groundwater Monitoring",
            "Perimeter Geotechnical Survey",
            "Terrain Analysis & Classification",
          ],
          itemsAr: [
            "برنامج حفر الآبار العميقة",
            "اختبار الاختراق المخروطي (CPT)",
            "اختبار مقياس الضغط",
            "مراقبة المياه الجوفية",
            "المسح الجيوتقني للمحيط",
            "تحليل التضاريس وتصنيفها",
          ],
        },
        {
          heading: "Laboratory & Analysis",
          headingAr: "المختبر والتحليل",
          items: [
            "Advanced Soil Testing",
            "Chemical Analysis of Soil & Water",
            "Compaction Characteristics",
            "Shear Strength Determination",
            "Consolidation Testing",
            "Corrosivity Assessment",
          ],
          itemsAr: [
            "اختبارات التربة المتقدمة",
            "التحليل الكيميائي للتربة والمياه",
            "خصائص الدمك",
            "تحديد مقاومة القص",
            "اختبار الانضغاط",
            "تقييم قابلية التآكل",
          ],
        },
        {
          heading: "Engineering Support",
          headingAr: "الدعم الهندسي",
          items: [
            "Foundation Design Parameters",
            "Pavement Design Recommendations",
            "Earthwork Specifications",
            "Slope Stability Analysis",
            "Ground Improvement Guidance",
            "Construction Phase Advisory",
          ],
          itemsAr: [
            "معاملات تصميم الأساسات",
            "توصيات تصميم الأرصفة",
            "مواصفات أعمال الترابيات",
            "تحليل استقرار المنحدرات",
            "إرشادات تحسين التربة",
            "الاستشارات في مرحلة الإنشاء",
          ],
        },
      ]}
    />
  );
}
