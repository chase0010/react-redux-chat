/*
 * @authors :Bin Mei
 * @date    :2017-05-22
 * @description：react-redux-chat  -> 仿微信聊天工具
 */

import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import actions from "src/actions";
import Sidebar from "../Sidebar/Index";
import Messages from "../Messages/Index";
import Send from "../Messages/Send";

// import dia from 'src/utils/dia';

import './Index.scss';




class wechat extends Component{
	constructor(props){
		super(props);

    	this.state = {
    		
    		
    	};
	}
	componentDidMount(){
		//dia(this);

	}
	
	render(){
		return ( 
			<section className="wechat">
				<Sidebar/>
				<div className="main">
					<Messages/>
					<Send/>
				</div>
			</section>
		);
	}
};

let mapStateToProps=(state)=>{
	
	return {
		
	};
}; 

let mapDispatchToProps=(dispatch)=>{
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(wechat);

