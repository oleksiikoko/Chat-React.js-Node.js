import React from "react";
import { Icon, Button } from "antd";

import { Messages, Status, ChatInput } from "components";
import { Dialogs } from "containers";

import dialogsJson from "dialogs.json";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" style={{ fontSize: "18px" }} />
            <span>Dialog list</span>
          </div>
          <Button type="link" shape="circle" icon="form" />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs userId={0} items={dialogsJson} />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">User Name</b>
            <div className="chat__dialog-header-status">
              <Status online={true} />
            </div>
          </div>
          <Button type="link" shape="circle" icon="ellipsis" />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
