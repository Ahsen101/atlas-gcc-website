import ServicePage from '../ServicePage';

export default function HealthSafetyPage() {
  return (
    <ServicePage
      title="Health & Safety"
      titleAr="الصحة والسلامة"
      subtitle="Comprehensive safety management ensuring zero-harm across all field operations"
      subtitleAr="إدارة شاملة للسلامة تضمن انعدام الأضرار في جميع العمليات الحقلية"
      heroImage="/images/about-cpt-rig.jpeg"
      secondaryImages={["/images/about-surveyor.jpeg"]}
      description={[
        "We provide adequate control of the health and safety risks arising from our activities. We consult with our employees on matters affecting their health and safety, and provide and maintain safe plant and equipment at all times.",
        "We ensure safe handling and use of substances, provide information, instruction, and supervision for all employees. We ensure all employees are competent to do their tasks and receive adequate training for every project environment.",
        "Our commitment extends to preventing accidents and cases of work-related ill health, maintaining safe and healthy working conditions, and reviewing and revising our safety policies at regular intervals.",
      ]}
      descriptionAr={[
        "نوفر تحكماً كافياً في مخاطر الصحة والسلامة الناشئة عن أنشطتنا. ونتشاور مع موظفينا في الأمور التي تؤثر على صحتهم وسلامتهم، ونوفر ونصون آلات ومعدات آمنة في جميع الأوقات.",
        "نضمن التعامل الآمن مع المواد واستخدامها، ونوفر المعلومات والتعليمات والإشراف لجميع الموظفين. ونتأكد من كفاءة جميع الموظفين لأداء مهامهم وحصولهم على التدريب الكافي لكل بيئة مشروع.",
        "يمتد التزامنا إلى الوقاية من الحوادث وحالات الاعتلال الصحي المرتبط بالعمل، والحفاظ على ظروف عمل آمنة وصحية، ومراجعة سياسات السلامة لدينا وتحديثها على فترات منتظمة.",
      ]}
      capabilities={[
        {
          heading: "Safety Management",
          headingAr: "إدارة السلامة",
          items: [
            "Safe Work Environment Creation",
            "Risk Assessment & Mitigation",
            "Safety Policy Development",
            "Regular Policy Review & Updates",
            "Incident Investigation & Reporting",
            "Emergency Response Planning",
          ],
          itemsAr: [
            "توفير بيئة عمل آمنة",
            "تقييم المخاطر والحد منها",
            "تطوير سياسات السلامة",
            "المراجعة الدورية للسياسات وتحديثها",
            "التحقيق في الحوادث والإبلاغ عنها",
            "التخطيط للاستجابة للطوارئ",
          ],
        },
        {
          heading: "Training & Supervision",
          headingAr: "التدريب والإشراف",
          items: [
            "Employee Safety Training",
            "Competency Assessment",
            "Field Supervision Programs",
            "Substance Handling Protocols",
            "Equipment Operation Certification",
            "Safety Induction Programs",
          ],
          itemsAr: [
            "تدريب الموظفين على السلامة",
            "تقييم الكفاءة",
            "برامج الإشراف الحقلي",
            "بروتوكولات التعامل مع المواد",
            "شهادات تشغيل المعدات",
            "برامج التعريف بالسلامة",
          ],
        },
        {
          heading: "Equipment & Standards",
          headingAr: "المعدات والمعايير",
          items: [
            "Safe Plant & Equipment Maintenance",
            "PPE Compliance Management",
            "Accident Prevention Programs",
            "Work-Related Illness Prevention",
            "Health Monitoring Programs",
            "ISO 9001:2015 Compliance",
          ],
          itemsAr: [
            "الصيانة الآمنة للآلات والمعدات",
            "إدارة الامتثال لمعدات الوقاية الشخصية",
            "برامج الوقاية من الحوادث",
            "الوقاية من الأمراض المرتبطة بالعمل",
            "برامج مراقبة الصحة",
            "الامتثال لمعيار ISO 9001:2015",
          ],
        },
      ]}
    />
  );
}
