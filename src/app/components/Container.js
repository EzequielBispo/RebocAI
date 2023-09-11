"use client";

import styled from "styled-components";

const Container = styled.div`
display: inline-flex;
align-items: center;
`;

function FunContainer(children) {
    return (
        <Container>{children}</Container>
    )
}

export default FunContainer;