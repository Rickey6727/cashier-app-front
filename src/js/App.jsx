import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navi from './Navi';
import Menu from './Menu';
import MenuEdit from './MenuEdit';
import Order from './Order';
import Top from './Top';
import OrderHistory from './OrderHistory';
import Research from './Research';
//import styled from 'styled-components';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			menus: [],
			historys: [],
			new_item_name: "",
			new_item_price: "",
			new_memo: ""
        }
    }
    render(){
        return (
			<BrowserRouter>
				<div>
					<Navi/>
					<Route exact path='/' component={Top} />
					<Route path='/menu' component={Menu} />
					<Route path='/menu-edit' component={MenuEdit} />
					<Route path='/order' component={Order} />
					<Route path='/order-history' component={OrderHistory} />
					<Route path='/research' component={Research} />
				</div>
			</BrowserRouter>
        );
    }
}