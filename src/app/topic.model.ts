export class Topic {
  constructor(public title: string, public text: string, public date: object, public image: string, public tag: string, public userName: string) {
    this.title = title,
    this.text = text,
    this.date = date,
    this.image = image,
    this.tag = tag,
    this.userName = userName;
  }
}
