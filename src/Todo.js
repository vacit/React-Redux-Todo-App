import React from 'react';
import {connect} from "react-redux";
import {setFilter, removeTodo} from "./actionCreators/actionCreaters";
import styled from "styled-components";

const ItemButton = styled.div`
    background: red;
    position: relative;
    > span {
        position: absolute;
    } 
`;


function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <ItemButton className={itemClass} onClick={() => {props.onCheckedToggle(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.removeTodo(id)}}>X</span>
        </ItemButton>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))}
});

export default connect(null, mapDispatchToProps)(Todo);
