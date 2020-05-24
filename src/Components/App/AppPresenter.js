import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Store from "store";
import Notification from "Components/Notification";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notifications).map(key => (
              <Notification
                key = {store.notifications[key].id}
                id = {store.notifications[key].id}
                text = {store.notifications[key].text}
                seen = {store.notifications[key].seen}
              />
            ));
          }
        }
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;