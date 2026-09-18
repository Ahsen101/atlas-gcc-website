import ServicePage from '../ServicePage';

export default function GeotechnicalPage() {
  return (
    <ServicePage
      title="Geotechnical Services"
      titleAr="الخدمات الجيوتقنية"
      subtitle="Comprehensive subsurface investigation and foundation engineering across Saudi Arabia and Bahrain"
      subtitleAr="تحقيقات شاملة لما تحت السطح وهندسة الأساسات في المملكة العربية السعودية والبحرين"
      heroImage="/images/service-geotechnical.jpeg"
      secondaryImages={["/images/about-cpt-rig.jpeg", "/images/about-excavator.jpeg"]}
      description={[
        "Soil investigation is performed to determine the depth and characteristics of different subsurface formations, the required foundation depth, the most suitable and economical type of foundations, allowable bearing capacities, and expected settlement for proposed structures — along with guidelines for earthwork construction specifications, cement type, backfill, and other geotechnical recommendations.",
        "Our fleet of rigs is capable of drilling in soil, gravel, and rock. Equipped with all necessary drilling accessories, our rigs perform drilling to depths of up to 200 meters. ATLAS has all the necessary field testing and sampling equipment to recover different types of samples and conduct several field tests.",
        "We provide integrated site characterization services combining advanced drilling, in-situ testing, and laboratory analysis to deliver reliable geotechnical data for projects of any scale.",
      ]}
      descriptionAr={[
        "يُجرى تحقيق التربة لتحديد عمق وخصائص التكوينات المختلفة تحت السطح، والعمق المطلوب للأساسات، وأنسب أنواع الأساسات وأكثرها اقتصادية، وقدرات التحمل المسموح بها، والهبوط المتوقع للمنشآت المقترحة — إلى جانب إرشادات لمواصفات أعمال الترابيات، ونوع الأسمنت، ومواد الردم، وغيرها من التوصيات الجيوتقنية.",
        "يمتلك أسطولنا من أجهزة الحفر القدرة على الحفر في التربة والحصى والصخور. ومزودة بجميع ملحقات الحفر اللازمة، تقوم أجهزتنا بالحفر إلى أعماق تصل إلى 200 متر. تمتلك أطلس جميع معدات الاختبار الحقلي وأخذ العينات اللازمة لاستخراج أنواع مختلفة من العينات وإجراء عدة اختبارات حقلية.",
        "نقدم خدمات متكاملة لتوصيف المواقع تجمع بين الحفر المتقدم والاختبار الموضعي والتحليل المعملي لتوفير بيانات جيوتقنية موثوقة للمشاريع على اختلاف أحجامها.",
      ]}
      capabilities={[
        {
          heading: "Drilling & Sampling",
          headingAr: "الحفر وأخذ العينات",
          items: [
            "Split Spoon Sampling (SPT)",
            "Shelby Tube Sampling",
            "Rock Coring (NX, HQ, PQ)",
            "Wash Boring & Rotary Drilling",
            "Auger Drilling",
            "Drilling up to 200m depth",
          ],
          itemsAr: [
            "أخذ العينات بالملعقة المشقوقة (SPT)",
            "أخذ العينات بأنابيب شيلبي",
            "استخراج اللباب الصخري (NX، HQ، PQ)",
            "الحفر بالغسل والحفر الدوراني",
            "الحفر بالبريمة",
            "الحفر حتى عمق 200 متر",
          ],
        },
        {
          heading: "In-Situ Testing",
          headingAr: "الاختبارات الموضعية",
          items: [
            "Cone Penetration Testing (CPT/CPTu)",
            "Standard Penetration Test (SPT)",
            "Pressuremeter Testing",
            "Plate Load Testing",
            "Vane Shear Testing",
            "Dynamic Cone Penetration Test (DCPT)",
          ],
          itemsAr: [
            "اختبار الاختراق المخروطي (CPT/CPTu)",
            "اختبار الاختراق القياسي (SPT)",
            "اختبار مقياس الضغط",
            "اختبار الحمل باللوح",
            "اختبار القص بالريشة",
            "اختبار الاختراق المخروطي الديناميكي (DCPT)",
          ],
        },
        {
          heading: "Foundation Engineering",
          headingAr: "هندسة الأساسات",
          items: [
            "Pile Load Testing (Static & Dynamic)",
            "Pile Integrity Testing",
            "Water Pumping Tests",
            "Percolation Tests",
            "Settlement Analysis",
            "Bearing Capacity Analysis",
          ],
          itemsAr: [
            "اختبار حمل الركائز (الساكن والديناميكي)",
            "اختبار سلامة الركائز",
            "اختبارات ضخ المياه",
            "اختبارات الترشيح",
            "تحليل الهبوط",
            "تحليل قدرة التحمل",
          ],
        },
      ]}
    />
  );
}
