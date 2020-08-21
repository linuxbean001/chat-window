import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withContext} from "../../custom/StateProvider";
import {AppBar, Icon, IconButton, Toolbar, Typography} from "@material-ui/core";
import classNames from 'classnames';
import './Chat.css';

const styles = theme => ({
  layoutRoot: {},
});

class Chat extends Component {

  state={

  };

  closeChat = () => {
    this.props.context.update({
      drawerContent:false
    })
  }

  render()
    {
        const {classes} = this.props;

        return (
          <React.Fragment>
            <AppBar
              position="absolute"
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  onClick={this.closeChat}
                >
                  <Icon>close</Icon>
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  Chats 
                </Typography>
                
              </Toolbar>
            </AppBar>
            <div className="custom_chat_box">
            <div className="chat_body">
		<div className="chat_list">
			<ul className="chat_message_hightlight">
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_active"></div>
					<div className="message_notification">2</div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
					<div className="message_notification">3</div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
					<div className="message_notification">1</div>
				</li>
			</ul>
			<hr className="break_line"/>
			<ul className="chat_message">
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_active"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_active"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_offline"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_active"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_inactive"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_away"></div>
				</li>
				<li>
					<img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg"/>
					<div className="chat_status chat_active"></div>
				</li>
			</ul>
		</div>

		<div className="chat_message_box">
          	<div className="msg_history">
            	<div className="incoming_msg">
              		<div className="incoming_msg_img"> <img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg" alt="sunil"/> </div>
              		<div className="received_msg">
                		<div className="received_withd_msg one_msg">
                  			<p>Quickly come to the meeting room 1B, we have a big server issue</p>
                  			<span className="time_date">March 22nd 2017, 5:02:28 pm</span>
                  		</div>
              		</div>
            	</div>
            	<div className="outgoing_msg">
              		<div className="sent_msg two_msg">
                		<p>I'm having breakfast right now, can't you wait for 10 minutes?</p>
                		<p>I'm having breakfast right now, can't you wait for 10 minutes?</p>
                		<span className="time_date">March 22nd 2017, 4:56:28 pm</span> 
                	</div>
            	</div>
            	<div className="incoming_msg">
              		<div className="incoming_msg_img"> <img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg" alt="sunil"/> </div>
              		<div className="received_msg">
                		<div className="received_withd_msg one_msg">
                  			<p>We are losing money! Quick!</p>
                  			<span className="time_date">March 22nd 2017, 5:02:28 pm</span>
                  		</div>
              		</div>
            	</div>
            	<div className="outgoing_msg">
              		<div className="sent_msg one_msg">
                		<p>It's not my money, you know. I will eat my breakfast and then I will come to the meeting room.</p>
                		<span className="time_date">March 22nd 2017, 5:02:28 pm</span> 
                	</div>
            	</div>
            	<div className="incoming_msg">
              		<div className="incoming_msg_img"> <img src="https://www.interoadvisory.com/wp-content/uploads/2018/03/shutterstock_246876349-200x200.jpg" alt="sunil"/> </div>
              		<div className="received_msg">
                		<div className="received_withd_msg four_msg">
                  			<p>You are the worst!</p>
                  			<p>We are losing money! Quick!</p>
                  			<p>You are the worst!</p>
                  			<p>We are losing money! Quick!</p>
                  			<span className="time_date">March 22nd 2017, 5:02:28 pm</span>
                  		</div>
              		</div>
            	</div>
            	<div className="outgoing_msg">
              		<div className="sent_msg one_msg">
                		<p>It's not my money, you know. I will eat my breakfast and then I will come to the meeting room.</p>
                		<span className="time_date">March 22nd 2017, 5:02:28 pm</span> 
                	</div>
            	</div>
          	</div>
          	<div className="type_msg">
            	<div className="input_msg_write">
              		<input type="text" className="write_msg" placeholder="Type your message"/>
              		<button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            	</div>
          	</div>
        </div>

	</div>
  </div>    

           
          </React.Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(withContext(Chat));
