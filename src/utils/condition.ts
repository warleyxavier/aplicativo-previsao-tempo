export function condition(condition: string) {
  switch (condition) {
    case "storm":
      return new Icon("rainy-outline", "black");
    case "clear_day":
      return new Icon("partly-sunny-outline", "#FFB300");
    case "rain":
      return new Icon("rainy-outline", "gray");
    default:
      return new Icon("cloud-outline", "#1ec9ff");
  }
}

class Icon {
  name: any;
  color: string;

  constructor(name: any, color: string) {
    this.name = name;
    this.color = color;
  }
}