// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

export type InputTextFieldProps = {
    placeholder?: string,
    value?: string,
};

function EmailInputTextField(props: InputTextFieldProps) {
    return (
        <Wrapper>
            <input type="text" placeholder={props.placeholder} tabIndex={1}/>
            <span className='icon' tabIndex={1} onClick={() => alert('hi')}>
                <AiOutlineArrowRight />
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 32px;
    border: 1px solid #2A2A39;
    background: transparent;
    padding: 14px 16px;

    & input[type="text"] {
        all: unset;

        width: 90%;
        box-sizing: border-box;

        font-family: 'Strawford';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.03em; 
        color: #9C9CBE;
        min-width: 220px;
    }

    & .icon {
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        
        & svg {
            height: 1.5rem;
            width: 1.5rem;
            fill: #DD44B9;
        }
    }
`;

export default EmailInputTextField;
