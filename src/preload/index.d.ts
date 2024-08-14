import { ElectronAPI } from '@electron-toolkit/preload'

type TypeApi = {
  performAdd: (num1:number, num2:number)=> number
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: TypeApi
  }
}
