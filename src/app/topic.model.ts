export class Topic {
  public postDate: string = Date();
  constructor(public title: string, public text: string, public image: string, public tag: string, public userName: string, public id: number) {
    this.title = title,
    this.text = text,
    this.image = image,
    this.tag = tag,
    this.userName = userName,
    this.id = id;
  }
}
