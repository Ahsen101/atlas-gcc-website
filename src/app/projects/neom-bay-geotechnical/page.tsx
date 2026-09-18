import ProjectPage from '../ProjectPage';

export default function NeomBayGeotechnicalPage() {
  return (
    <ProjectPage
      title="NEOM Bay Airport — Geotechnical & Geophysical Investigation"
      titleAr="مطار خليج نيوم — التحقيق الجيوتقني والجيوفيزيائي"
      subtitle="Integrated geotechnical and geophysical investigation for the NEOM Bay Airport megaproject"
      subtitleAr="تحقيق جيوتقني وجيوفيزيائي متكامل لمشروع مطار خليج نيوم العملاق"
      heroImage="/images/service-bathymetric.jpeg"
      status="Approved"
      statusAr="معتمد"
      client="NEOM Company"
      clientAr="شركة نيوم"
      location="NEOM Bay, Saudi Arabia"
      locationAr="خليج نيوم، المملكة العربية السعودية"
      secondaryImages={["/images/service-geological-terrain.jpeg"]}
      description={[
        "ATLAS GES was engaged to perform an integrated geotechnical and geophysical investigation campaign for the NEOM Bay Airport, one of the Kingdom's most ambitious aviation infrastructure developments.",
        "The investigation covered the full extent of the airport development footprint, combining advanced borehole drilling, in-situ testing, and state-of-the-art geophysical surveys to produce a comprehensive ground model of the site.",
        "Our multidisciplinary approach delivered a unified subsurface dataset that enabled optimized design of runway pavements, terminal foundations, and supporting infrastructure across the complex and varied geological conditions of the NEOM Bay area.",
      ]}
      descriptionAr={[
        "كُلّفت أطلس بتنفيذ حملة تحقيق جيوتقني وجيوفيزيائي متكاملة لمطار خليج نيوم، أحد أكثر مشاريع البنية التحتية للطيران طموحاً في المملكة.",
        "غطى التحقيق كامل نطاق مساحة تطوير المطار، بالجمع بين الحفر المتقدم للآبار والاختبار الموضعي والمسوحات الجيوفيزيائية المتطورة لإنتاج نموذج أرضي شامل للموقع.",
        "قدّم نهجنا المتعدد التخصصات مجموعة بيانات موحدة لما تحت السطح مكّنت من التصميم الأمثل لأرصفة المدارج وأساسات المبنى والبنية التحتية الداعمة عبر الظروف الجيولوجية المعقدة والمتنوعة لمنطقة خليج نيوم.",
      ]}
      scope={[
        {
          heading: "Geotechnical Program",
          headingAr: "البرنامج الجيوتقني",
          items: [
            "Deep Borehole Drilling (50m+ depth)",
            "Cone Penetration Testing with Pore Pressure (CPTu)",
            "Pressuremeter & Dilatometer Testing",
            "Large-Diameter Trial Pits",
            "Groundwater Regime Characterization",
            "Undisturbed Block Sampling",
          ],
          itemsAr: [
            "حفر الآبار العميقة (أكثر من 50 متراً)",
            "اختبار الاختراق المخروطي مع ضغط المسام (CPTu)",
            "اختبار مقياس الضغط والدايلاتوميتر",
            "حفر جسّات كبيرة القطر",
            "توصيف نظام المياه الجوفية",
            "أخذ العينات الكتلية غير المضطربة",
          ],
        },
        {
          heading: "Geophysical Campaign",
          headingAr: "الحملة الجيوفيزيائية",
          items: [
            "Multi-Channel Seismic Refraction (MASW)",
            "2D Electrical Resistivity Tomography",
            "Downhole Seismic Testing",
            "Seismic Hazard Assessment",
            "Vs30 Site Classification",
            "Integrated Subsurface Modelling",
          ],
          itemsAr: [
            "الانكسار الزلزالي متعدد القنوات (MASW)",
            "التصوير المقطعي للمقاومية الكهربائية ثنائي الأبعاد",
            "الاختبار الزلزالي داخل البئر",
            "تقييم المخاطر الزلزالية",
            "تصنيف الموقع وفق Vs30",
            "النمذجة المتكاملة لما تحت السطح",
          ],
        },
        {
          heading: "Engineering Outputs",
          headingAr: "المخرجات الهندسية",
          items: [
            "3D Ground Model Development",
            "Seismic Design Parameters",
            "Runway & Taxiway Subgrade Report",
            "Foundation Recommendations by Zone",
            "Ground Improvement Strategy",
            "Geotechnical Risk Register",
          ],
          itemsAr: [
            "تطوير نموذج أرضي ثلاثي الأبعاد",
            "معاملات التصميم الزلزالي",
            "تقرير الطبقة التحتية للمدارج وممرات السير",
            "توصيات الأساسات حسب المنطقة",
            "استراتيجية تحسين التربة",
            "سجل المخاطر الجيوتقنية",
          ],
        },
      ]}
    />
  );
}
