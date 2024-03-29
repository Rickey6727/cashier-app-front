import React from 'react';
import request from 'superagent';
import styled from 'styled-components';

const Wrapper = styled.div`
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Papyrus';
    font-size: 1rem;
`

const ListWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 50px;
    min-height: 80vh;
    background-color: #F3F3ED;
    border-radius: 10px;
`

const List = styled.ul`
    list-style: none;
`

const ListContent = styled.li`
    position: relative;
    margin-bottom: 50px;
`

const MenuPrice = styled.p`
    position: absolute;
    top: 0;
    right: 50px;
`

const MenuTitle = styled.p`
    font-size: 24px;
    padding: 10px;
    border-bottom: dotted 1px #31322A;
`

const MenuMemo = styled.p`
    font-size: 16px;
    padding-left: 50px;
`

export default class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			menus: []
        }
		request
			.get('https://cashier-app-back.herokuapp.com/menu')
			.end((err, res) => {
				var menus = res.body;
				this.setState({ menus });
			});
    }
    render(){
        return (
            <Wrapper>
                <Title>MENU</Title>
                <ListWrapper>
                    <List>
                        {this.state.menus.map((menu, index) => (
                        <ListContent key={index}>
                            <MenuPrice>¥ {menu.item_price} -</MenuPrice>
                            <MenuTitle>{menu.item_name}</MenuTitle>
                            <MenuMemo>{menu.memo}</MenuMemo>
                        </ListContent>
                        ))}
                    </List>
                </ListWrapper>
            </Wrapper>
        )
    }
}