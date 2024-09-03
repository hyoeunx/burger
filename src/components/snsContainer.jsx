import React from 'react';
import styled from 'styled-components';
import { iconImages } from '../contents/iconImages';

const SnsContainer = () => {
    return (
        <SnsWrapper>
            {iconImages.map((data)=>(
                <IconContainer>
                    <IconImage key={data.id} src={data.image} alt="icon" />
                </IconContainer>
            ))}
        </SnsWrapper>
    );
};

export default SnsContainer;

const SnsWrapper = styled.div`
    background-color: #683a30;
    width: 100%;
    height: 140px;
`;

const IconContainer = styled.div`

`;

const IconImage = styled.div`
    
`;