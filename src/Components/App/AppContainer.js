import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this._deleteNotification = id => {
      console.log(id);
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      })
    }

    this._seeNotification = id => {
      alert(this.state.notifications[id].text);

      this.setState(currentState => {
        return {
          ...currentState,
          notifications : {
            ...currentState.notifications,
            [id] : {
              ...currentState.notifications[id],
              seen : true
            }
          }
        }
      });
    }

    this.state = {
      notifications:{
        "1" : {
          id : 1,
          text : "blahblah 📌",
          seen : false
        },
        "2" : {
          id : 2,
          text : "blahblah 👑",
          seen : true
        },
        "3" : {
          id : 3,
          text : "blahblah 🐜",
          seen : false
        },
        "4" : {
          id : 4,
          text : "blahblah 😎",
          seen : false
        }
      },
      deleteNotification : this._deleteNotification,
      seeNotification : this._seeNotification
    };
  } // 클래스가 생성되었을 때 store가 value를 얻는다.

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;