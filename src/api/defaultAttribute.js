export default function apiAttribute(name) {
  switch (name) {
    case "dino":
      return Dinasour;
    case "birds":
      return Birds;
    case "mammalia":
      return Mammalia;
    case "egg1":
      return Egg1;
    case "replica":
      return Replica;
    case "basement_location":
      console.log("not registered");
      break;
    case "spicemensInOtherCountry":
      return SpicemensInOtherCountry;
    case "turtles":
      return Turtles;
    case "fish":
      return Fish;
    case "plants":
      return Plants;
    case "insects":
      return Insects;
    case "egg2":
      console.log("not registered");
      break;
    case "synapsida":
      return Synapsida;
    case "invertebrates":
      return Invertebrates;
    default:
      break;
  }
}
let Dinasour = {
  General_num: "",
  Frame_num: "",
  Basement_types: "Ү",
  Year_of_registered_in_RCH: "",
  Detialed_regist_num: "",
  Diversified_num: "M-d",
  Field_num: "",
  Registeration_num: "MPC-D ",
  Accession_num: "",
  Specimen_names: "",
  Age_of_layers: "K2 bs",
  Year_of_found_specimens: "",
  Contents: "",
  Locality: "",
  Finder: "",
  ID_by: "",
  Place_where_to_saving: "",
  Publications: "",
  Family: "",
  Dates_of_giving_MPC_numbers: "",
  Explanation: "",
};
let Replica = [
  "Num",
  "Registeration_num",
  "Diversified_num",
  "Species_names",
  "Year_of_make_a_cast",
  "Contents",
  "Num_of_copies",
  "Place_and_country_made_a_replica",
  "Place_where_to_saving",
  "Catalog_num_given_date",
  "Additional_information",
];
let SpicemensInOtherCountry = [
  "Num",
  "Specimen_names",
  "Catalog_num",
  "Field_num",
  "Accession_num",
  "Formation",
  "Year",
  "Contents",
  "Locality",
  "Finder",
  "ID_by",
  "Place_where_to_saving",
  "Publications",
  "Dates_of_giving_catalog_num",
];
let Birds = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Registration_num",
  "Field_num	",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Collection_date",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Publications",
  "Housed_location",
  "Date_given_catalog_num	",
];
let Mammalia = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Registration_num",
  "Old_registration_num",
  "Accession_num",
  "Specimen_name",
  "Field_num",
  "Age",
  "Collection_date",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Remarks",
  "Preliminary_spec_num",
  "Returned_back",
  "Housed_in",
  "Date_of_numbering",
];
let Turtles = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Registration_num",
  "Old_Registration_num",
  "Field_num",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Housed_location",
  "Additional_explanation",
];
let Fish = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Registration_num",
  "Field_num	",
  "Old_registration_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Collection_date",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Remarks",
  "Preliminary_spec_num",
];

let Plants = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "New_registration_num",
  "Registration_num",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Collection_date",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Housed_location",
];
let Insects = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Registration_num",
  "Old_registration_num",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Housed_location",
];
let Egg1 = [
  "Num",
  "Specimen_type",
  "Year_of_registered_in_RCH",
  "Field_num",
  "Registration_num",
  "Specimen_names",
  "Age_of_layers",
  "Year",
  "Contents",
  "Locality",
  "Finder",
  "ID_by",
  "Place_where_to_saving",
  "Explanation",
];
let Synapsida = [
  "Num",
  "Registration_num",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Collection_date",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Housed_location",
];
let Invertebrates = [
  "Num",
  "Registration_num",
  "Accession_num",
  "Specimen_name",
  "Age",
  "Pieces",
  "Anatomy",
  "Locality",
  "Collected_by",
  "Described_by",
  "Housed_location",
];
