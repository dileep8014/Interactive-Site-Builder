import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling/Styling';
import settings from '../../images/settings.svg';

export const EditorWrapper = styled.div`
    background-color: ${COLORS.lightGray};
    width: 100%;
    min-height: 100vh;

    .selected {
        background-color: blue;
    }

    @media (${QUERIES.medium}) {
        width: calc(100% - 320px);
    }
`;

export const BuildChildCont = styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition-duration: 0.2s;
    border: 2px solid transparent;
    cursor: grab;

    @media (${QUERIES.medium}) {
        width: 50%;
    }
`;

export const ChildDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
    height: 200px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
`;

export const SplitDiv = styled(ChildDiv)`
    width: 47%;
`;

export const TriDiv = styled(ChildDiv)`
    width: 30%;
`;

export const NavDiv = styled(ChildDiv)``;

export const FooterDiv = styled(ChildDiv)``;
