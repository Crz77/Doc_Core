
import React from 'react';
import './hidden-link.css';

export default function HiddenLink(props){
    function openUrl(){
        window.open(props.link, '_blank')
    }

    return (
        <button class="button button--block button--primary" onClick={openUrl}>{props.label}</button>
    )
}