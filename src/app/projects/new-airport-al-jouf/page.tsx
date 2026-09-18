import ProjectPage from '../ProjectPage';

export default function NewAirportAlJoufPage() {
  return (
    <ProjectPage
      title="New Airport Al Jouf"
      titleAr="مطار الجوف الجديد"
      subtitle="Full-scope geotechnical and geophysical investigation for the new Al Jouf regional airport development"
      subtitleAr="تحقيق جيوتقني وجيوفيزيائي كامل النطاق لتطوير مطار الجوف الإقليمي الجديد"
      heroImage="/images/project-4.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="General Authority of Civil Aviation (GACA)"
      clientAr="الهيئة العامة للطيران المدني (GACA)"
      location="Al Jouf Region, Saudi Arabia"
      locationAr="منطقة الجوف، المملكة العربية السعودية"
      secondaryImages={["/images/service-marine-mapping.jpeg"]}
      description={[
        "ATLAS GES was appointed to carry out comprehensive geotechnical and geophysical investigations for the new Al Jouf Airport, a greenfield airport development in the northern region of Saudi Arabia.",
        "The project encompassed extensive site characterization across the entire airport footprint, including runway alignments, terminal building areas, aprons, taxiways, and supporting infrastructure zones.",
        "Our multidisciplinary team deployed advanced field testing equipment and geophysical instruments to deliver a thorough understanding of the subsurface conditions, enabling optimized foundation and pavement design for the entire airport complex.",
      ]}
      descriptionAr={[
        "كُلّفت أطلس بإجراء تحقيقات جيوتقنية وجيوفيزيائية شاملة لمطار الجوف الجديد، وهو مطار يُنشأ على أرض جديدة في المنطقة الشمالية من المملكة العربية السعودية.",
        "شمل المشروع توصيفاً واسعاً للموقع عبر كامل مساحة المطار، بما في ذلك محاذاة المدارج، ومناطق مبنى الركاب، والساحات، وممرات السير، ومناطق البنية التحتية الداعمة.",
        "نشر فريقنا المتعدد التخصصات معدات اختبار حقلي وأجهزة جيوفيزيائية متقدمة لتقديم فهم شامل للظروف تحت السطحية، مما مكّن من التصميم الأمثل للأساسات والأرصفة لمجمع المطار بأكمله.",
      ]}
      scope={[
        {
          heading: "Geotechnical Campaign",
          headingAr: "الحملة الجيوتقنية",
          items: [
            "Large-Scale Borehole Program",
            "Cone Penetration Testing (CPT)",
            "Plate Load Testing",
            "Field Density Testing",
            "Trial Pit Excavation & Logging",
            "Rock Core Recovery & RQD",
          ],
          itemsAr: [
            "برنامج حفر آبار واسع النطاق",
            "اختبار الاختراق المخروطي (CPT)",
            "اختبار الحمل باللوح",
            "اختبار الكثافة الحقلي",
            "حفر الجسّات وتسجيلها",
            "استخراج اللباب الصخري وتحديد جودته (RQD)",
          ],
        },
        {
          heading: "Geophysical Surveys",
          headingAr: "المسوحات الجيوفيزيائية",
          items: [
            "Seismic Refraction Profiling",
            "Electrical Resistivity Imaging",
            "Ground Penetrating Radar (GPR)",
            "Cross-Hole Seismic Testing",
            "Dynamic Soil Properties Assessment",
            "Subsurface Anomaly Detection",
          ],
          itemsAr: [
            "التصوير المقطعي للانكسار الزلزالي",
            "تصوير المقاومية الكهربائية",
            "رادار اختراق الأرض (GPR)",
            "الاختبار الزلزالي بين الآبار",
            "تقييم الخصائص الديناميكية للتربة",
            "الكشف عن الشذوذات تحت السطحية",
          ],
        },
        {
          heading: "Airport Engineering",
          headingAr: "هندسة المطارات",
          items: [
            "Runway Foundation Design Support",
            "Pavement Subgrade Assessment",
            "Terminal Building Foundation Analysis",
            "Apron & Taxiway Ground Evaluation",
            "Earthwork Volume Calculations",
            "Construction Material Source Surveys",
          ],
          itemsAr: [
            "دعم تصميم أساسات المدارج",
            "تقييم الطبقة التحتية للأرصفة",
            "تحليل أساسات مبنى الركاب",
            "تقييم أرضية الساحات وممرات السير",
            "حسابات كميات أعمال الترابيات",
            "مسوحات مصادر مواد البناء",
          ],
        },
      ]}
    />
  );
}
