import React from 'react';
import MailModal from './mailmodal';

export default class Mail extends React.Component {
  render(){
    return(
      <div>
      <div className="media">
        <div className="media-left media-top">
          <img className="media-object" src="img/pineapple_profile_pic.png" alt="Generic placeholder image"/>
        </div>
        <div className="media-body">
          <div className="media-body">
              <a href="#">{this.props.author}</a>
              <br /> {this.props.title}
              <br /><span className="pull-right"><a href="#" >Accepted</a> · <a href="#" >Peace Out</a> · <a type="button" data-toggle="modal" data-target={"#modal-content"+this.props.mailId}>Details</a> · {this.props.createDate}</span>
                <MailModal mailId={this.props.mailId}
                           author={this.props.author}
                           title={this.props.title}
                           createDate={this.props.createDate}>
                           {this.props.children}
                </MailModal>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
