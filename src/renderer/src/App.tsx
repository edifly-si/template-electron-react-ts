import { Button } from "antd"
// import { useEffect } from "react";

// const sendIpc = async () => {
//   const response = await window.electron.ping()
//   console.log(response);

// }

function App(): JSX.Element {

  // const ipcHandle = (): void => {
  //   console.log("Send Ping")
  //   window.electron.ipcRenderer.send('ping')
  // }

  // useEffect(() => {
  //   sendIpc()
  // }, [])

  return (
    <>
      <p>Electron</p>
      <Button type="primary">Button</Button>
      {/* <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions> */}
    </>
  )
}

export default App
