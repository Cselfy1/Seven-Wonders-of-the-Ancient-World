import React from 'react';
import styled from 'styled-components';

const Second = () => {
    return (
        <StyledWrapper>
            <h2>Great Pyramid of Giza (hover text effect)</h2>
            <div className="card">
                <div className="first-content">
                    <img src="/Second.jpg" alt="Giza" />
                </div>
                <div className="second-content">
                    <h1 className="card__title">🛕</h1>
                    <p className="card__description">
                        The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. 
                        It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.
                    </p>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;

    h2 {
        margin-bottom: 1rem;
    }

    .card {
        width: 200px;
        height: 300px;
        background: rgba(255, 255, 255, 0.05);
        transition: all 0.4s;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
        position: relative;
    }

    .card:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0 10px 40px rgba(166, 102, 255, 0.2);
        background: rgba(40, 40, 40, 0.1);
    }

    .first-content {
        height: 100%;
        width: 100%;
        transition: all 0.4s;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        border-radius: 16px;
    }

    .first-content img {
        width: 350%; /* Adjust the width to make the image smaller */
        height: auto; /* Maintain the aspect ratio */
    }

    .card:hover .first-content {
        height: 0px;
        opacity: 0;
    }

    .second-content {
        height: 0%;
        width: 100%;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        transition: all 0.4s;
        font-size: 0px;
        transform: rotate(90deg) scale(-1);
    }

    .card:hover .second-content {
        opacity: 1;
        height: 100%;
        font-size: 1rem;
        transform: rotate(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 1.2rem;
        color: #f8f8f8;
        font-weight: 700;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 0.8rem;
        color: #aaa;
        line-height: 1.4;
        padding: 0 10px;
    }
`;

export default Second;