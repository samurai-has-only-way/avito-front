import styled from 'styled-components';

export const FooterWrap = styled.div`
    background: #481173;
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        color: rgba(255,255,255,.7);
    }
    p + p {
        margin: 10px 0 0 0;
    }
`;