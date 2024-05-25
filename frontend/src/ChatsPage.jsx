import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height:'100vh'}}>
      <PrettyChatWindow
        projectId='bd00dfef-3aef-46d0-8b63-eb9c55e61df0'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}

export default ChatsPage;
