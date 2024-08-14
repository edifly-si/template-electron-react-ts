import { store } from '@renderer/redux/store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export default function ReduxThunkProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
