export interface IMessage {
  imgSrc: string
  name: string
  message: string
  time: string
  isRead: boolean
  onClick?(e:any): void
}
