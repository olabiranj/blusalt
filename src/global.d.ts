interface sideLinkType {
  link: string;
  name: string;
  icon: any;
}
interface ServicesType {
  bgImg: string;
}

interface SingleProjectType extends ServicesType {
  title: string;
  content: string;
}

interface CardType {
  img: any;
  value: string;
  label: string;
  ratio: string;
  line: string;
}
