import ProjectPage from '../ProjectPage';

export default function NaqelFacilityDammamPage() {
  return (
    <ProjectPage
      title="Extension of Naqel Facility"
      titleAr="توسعة منشأة ناقل"
      subtitle="Geotechnical investigation for the expansion of Naqel logistics facility at King Fahad International Airport"
      subtitleAr="تحقيق جيوتقني لتوسعة منشأة ناقل اللوجستية في مطار الملك فهد الدولي"
      heroImage="/images/hero-drilling-rig.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="Naqel Express / King Fahad International Airport"
      clientAr="ناقل إكسبرس / مطار الملك فهد الدولي"
      location="Dammam, Saudi Arabia"
      locationAr="الدمام، المملكة العربية السعودية"
      secondaryImages={["/images/about-drilling-team.jpeg"]}
      description={[
        "ATLAS GES was engaged to provide geotechnical investigation services for the extension of the Naqel logistics and cargo handling facility at King Fahad International Airport in Dammam.",
        "The project required careful investigation of ground conditions adjacent to existing operational structures, necessitating low-vibration drilling techniques and precise subsurface profiling to avoid disruption to ongoing airport logistics operations.",
        "Our team delivered comprehensive foundation design parameters for the facility extension, including recommendations for foundation systems compatible with the existing structures and assessment of potential construction impacts on adjacent buildings.",
      ]}
      descriptionAr={[
        "كُلّفت أطلس بتقديم خدمات التحقيق الجيوتقني لتوسعة منشأة ناقل اللوجستية ومناولة الشحنات في مطار الملك فهد الدولي بالدمام.",
        "تطلّب المشروع تحقيقاً دقيقاً في ظروف الأرض المجاورة للمنشآت التشغيلية القائمة، مما استلزم تقنيات حفر منخفضة الاهتزاز وتصويراً مقطعياً دقيقاً لما تحت السطح لتجنب تعطيل العمليات اللوجستية الجارية في المطار.",
        "قدّم فريقنا معاملات شاملة لتصميم أساسات توسعة المنشأة، بما في ذلك توصيات لأنظمة أساسات متوافقة مع المنشآت القائمة وتقييم التأثيرات المحتملة للإنشاء على المباني المجاورة.",
      ]}
      scope={[
        {
          heading: "Site Investigation",
          headingAr: "التحقيق في الموقع",
          items: [
            "Borehole Drilling Adjacent to Structures",
            "Low-Vibration Investigation Techniques",
            "Standard Penetration Testing (SPT)",
            "Groundwater Assessment",
            "Utility Detection & Avoidance",
            "Existing Foundation Assessment",
          ],
          itemsAr: [
            "حفر الآبار بمحاذاة المنشآت",
            "تقنيات تحقيق منخفضة الاهتزاز",
            "اختبار الاختراق القياسي (SPT)",
            "تقييم المياه الجوفية",
            "الكشف عن المرافق وتجنبها",
            "تقييم الأساسات القائمة",
          ],
        },
        {
          heading: "Analysis & Testing",
          headingAr: "التحليل والاختبار",
          items: [
            "Soil Bearing Capacity Analysis",
            "Differential Settlement Assessment",
            "Soil-Structure Interaction Study",
            "Chemical Testing for Aggressivity",
            "Compaction Testing",
            "Material Compatibility Analysis",
          ],
          itemsAr: [
            "تحليل قدرة تحمل التربة",
            "تقييم الهبوط التفاضلي",
            "دراسة التفاعل بين التربة والمنشأ",
            "الاختبار الكيميائي لقابلية التآكل",
            "اختبار الدمك",
            "تحليل توافق المواد",
          ],
        },
        {
          heading: "Design Recommendations",
          headingAr: "توصيات التصميم",
          items: [
            "Extension Foundation Design Parameters",
            "Construction Methodology Guidance",
            "Vibration Impact Assessment",
            "Dewatering Recommendations",
            "Ground Improvement Options",
            "Construction Monitoring Plan",
          ],
          itemsAr: [
            "معاملات تصميم أساسات التوسعة",
            "إرشادات منهجية الإنشاء",
            "تقييم تأثير الاهتزاز",
            "توصيات نزح المياه",
            "خيارات تحسين التربة",
            "خطة مراقبة الإنشاء",
          ],
        },
      ]}
    />
  );
}
