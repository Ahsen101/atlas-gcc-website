import ServicePage from '../ServicePage';

export default function EnvironmentalPage() {
  return (
    <ServicePage
      title="Environmental Consultancy"
      titleAr="الاستشارات البيئية"
      subtitle="Registered Category B Environmental Consultant providing comprehensive assessment and remediation services"
      subtitleAr="استشاري بيئي مسجّل من الفئة (ب) يقدم خدمات شاملة للتقييم والمعالجة"
      heroImage="/images/service-marine-mapping.jpeg"
      secondaryImages={["/images/service-geological-map.jpeg"]}
      description={[
        "ATLAS GES is an Environmental Consulting firm registered as Category B with the Bahrain Supreme Council of Environment, based in Manama, Bahrain.",
        "We provide a full spectrum of environmental services including impact assessments, baseline studies, risk assessments, emergency response planning, site assessments, auditing and permitting — ensuring regulatory compliance and environmental stewardship.",
        "Our remediation expertise covers groundwater characterization, contaminant assessment, underground and above-ground storage tank investigation, and comprehensive remedial design and feasibility studies.",
      ]}
      descriptionAr={[
        "أطلس شركة استشارات بيئية مسجّلة ضمن الفئة (ب) لدى المجلس الأعلى للبيئة في البحرين، ويقع مقرها في المنامة بالبحرين.",
        "نقدم مجموعة كاملة من الخدمات البيئية تشمل تقييمات الأثر، والدراسات المرجعية، وتقييمات المخاطر، والتخطيط للاستجابة للطوارئ، وتقييمات المواقع، والتدقيق والتراخيص — بما يضمن الامتثال التنظيمي والمسؤولية البيئية.",
        "تغطي خبرتنا في المعالجة توصيف المياه الجوفية، وتقييم الملوثات، والتحقيق في خزانات التخزين تحت الأرض وفوقها، والتصميم العلاجي الشامل ودراسات الجدوى.",
      ]}
      capabilities={[
        {
          heading: "Assessment Services",
          headingAr: "خدمات التقييم",
          items: [
            "Environmental & Social Impact Assessment (ESIA)",
            "Environmental Baseline Studies (EBS)",
            "Environmental Risk Assessment (ERA)",
            "Environmental Site Assessment (ESA)",
            "Environmental Auditing & Permitting",
            "Environmental Emergency Response Planning",
          ],
          itemsAr: [
            "تقييم الأثر البيئي والاجتماعي (ESIA)",
            "الدراسات البيئية المرجعية (EBS)",
            "تقييم المخاطر البيئية (ERA)",
            "التقييم البيئي للموقع (ESA)",
            "التدقيق البيئي والتراخيص",
            "التخطيط للاستجابة للطوارئ البيئية",
          ],
        },
        {
          heading: "Monitoring & Analysis",
          headingAr: "المراقبة والتحليل",
          items: [
            "Air Pollution Assessment",
            "Water & Wastewater Services",
            "Groundwater Characterization & Monitoring",
            "Contaminant Assessment Studies",
            "Noise & Emission Modelling",
            "Environmental & Social Management Planning",
          ],
          itemsAr: [
            "تقييم تلوث الهواء",
            "خدمات المياه ومياه الصرف",
            "توصيف ومراقبة المياه الجوفية",
            "دراسات تقييم الملوثات",
            "نمذجة الضوضاء والانبعاثات",
            "التخطيط للإدارة البيئية والاجتماعية",
          ],
        },
        {
          heading: "Remediation",
          headingAr: "المعالجة",
          items: [
            "Groundwater Remediation",
            "UST & AST Investigation & Closure",
            "Remedial Design & Feasibility Studies",
            "Remediation Products & Solutions",
            "Municipal Waste Management",
            "Control of Oil Sludge",
          ],
          itemsAr: [
            "معالجة المياه الجوفية",
            "التحقيق في خزانات التخزين تحت الأرض وفوقها وإغلاقها",
            "التصميم العلاجي ودراسات الجدوى",
            "منتجات وحلول المعالجة",
            "إدارة النفايات البلدية",
            "التحكم في حمأة النفط",
          ],
        },
      ]}
    />
  );
}
