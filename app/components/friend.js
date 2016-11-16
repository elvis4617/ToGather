import React from 'react';
import MessageEntry from './messageEntry';
import FriendDetailModal from './friendDetailModal';
import {onMessage} from '../server';

export default class friend extends React.Component {
  constructor(props) {
    super(props);
    // The Friend's initial state is what the Feed passed to us.
    this.state = this.props.data;
  }

  render() {
    var data = this.state;
    return (
      <div className ="row">
        <div className ="col-md-12">
          <div className ="panel panel-default friends-panel">
            <div className ="panel-body">

              <div className ="media">
                <div className ="media-left media-top">
                  <img className="profpic" src = "img/testProfilePic.jpg"/>
                </div>
                <div className ="media-body">
                  <a type="button" data-toggle="modal" data-target={"#account-modal"+data._id} href="#">{data.fullName}</a>
                    <FriendDetailModal id={data._id}
                               data={data}>
                    </FriendDetailModal>
                  <br/>
                  {data.school}
                </div>
              </div>
            </div>
          </div>
          <MessageEntry sendMessage = {(message) => onMessage(message, 2, this._id)}/>
          <hr/>
        </div>
      </div>
    )
  }
}
