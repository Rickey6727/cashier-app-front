import React from 'react';
import request from 'superagent';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 220px;
`

export default class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			menus: []
        }
    }
    render(){
        return (
            <Wrapper>
                <h1>ここで会計の取り消しをします（返品確認ポップアップを表示）</h1>
                <input placeholder="レシート番号を入力"/>
                <button>返品</button>
            </Wrapper>
        )
    }
}