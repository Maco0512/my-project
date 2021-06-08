export default function getAttribute(name) {
  switch (name) {
    case "fossil":
      return data[0];
    case "collection":
      return data[1];
    case "treasury":
      return data[2];
    default:
      break;
  }
}
const data = [
  {
    catalog_no: "Цуглуулгын дугаар",
    accession_no: "Хувийн дугаар",
    class: "Анги",
    super_order: "Дээд баг",
    order: "Баг",
    suborder: "Дэд баг",
    family: "Овог",
    genus: "Төрөл",
    species: "Зүйл",
    common_name: "Түгээмэл нэршил",
    TSN: "Таксономийн дугаар",
    province: "Олдсон аймаг",
    sum: "Олдсон сум",
    locality: "Олдворт газар",
    UTM: "UTM байршил",
    latitude_degree: "Өргөрөг градус",
    latitude_minutes: "Өргөрөг минут",
    latitude_seconds: "Өргөрөгсекунд",
    longitude_degree: "Уртраг градус",
    longitude_minutes: "Уртраг минут",
    longitude_seconds: "Уртраг секунд",
    elevation: "Далайн төвшнөөс дээш / метр",
    depth: "Гүн /өнгөн давхаргаас доош / метр",
    depos_environ: "Хадгалагдсан орчны мэдээлэл",
    lithology: "Литологи",
    vertical_datum: "Давхаргын зүсэлт",
    datum: "Давхарга/ Стратиграфи",
    in_situ_float: "Зөөвөрлөгдсөн эсэх",
    horizon: "Биохоризон",
    taphonomy: "Тафономи",
    period_system: "Галав",
    epoch_series: "Галчин",
    age_stage: "Нас/ Үе шат",
    formation: "Формаци",
    member: "Мембер",
    type_specimen: "Олдворын төрөл",
    figured_specimen: "Харьцуулах олдвор",
    identified_by: "Тодорхойлсон",
    ident_date: "Тодорхойлсон огноо",
    study_no: "Судалсан судлаач",
    published: "Хэвлэгдсэн",
    description: "Тодорхойлолт",
  },
  {
    collector: "Цуглуулсан",
    field_no: "Хээрийн дугаар",
    collection_date: "Цуглуулсан огноо",
    maint_cycle_date: "Сэргээн засварласан огноо",
    eminent_figure: "Хүлээлгэн өгсөн этгээд",
    eminent_org: "Хүлээлгэн өгсөн байгууллага",
    other_numbers: "Бусад дугаар",
    cataloger: "Бүртгэсэн",
    catalog_date: "Бүртгэсэн огноо",
    repro_method: "Хуулбарласан аргачлал",
    unit: "Хуулбарласан нэгж",
    reference_datum: "Лавлах өгөгдлийн сан",
  },
  {
    dimens_weight: "Хэмжээ/ Жин",
    item_count: "Иж бүрдлийн тоо",
    quantity: "Тоо ширхэг",
    storage_unit:
      "Сан хөмрөгийн нэгж / хадгалагдаж байгаа хайрцагны тоо ширхэг",
    condition: "Хадгалалтын байдал",
    condition_desc: "Хадгалалтын бичиглэл",
    from_to_where: "Олдворын шилжилт/ хаанаас хаашаа",
    temp_movement_goal: "Түр шилжүүлсэн зорилго",
    temp_movement_date: "Түр шилжүүлсэн огноо",
    received_back_date: "Буцаан хүлээн авсан огноо",
    recieved_integrity: "Хүлээлцэх  үеийн бүрэн, бүтэн байдал",
    ctrl_prop: "Соёлын өвийн зэрэглэл",
    location: "Сан хөмрөгийн байршил",
    object_status: "Ашиглалтын байдал",
    status_date: "Огноо",
    catalog_folder: "Цуглуулгын фолдер",
  },
];
