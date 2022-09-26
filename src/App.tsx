  import React from "react";
  import {
    Container
  } from './styles/Container'
import { Child, EqualDivider } from "./styles/Flex";

  const App: React.FC = () => {
    return (
        <Container>
            Hello
            <EqualDivider>
                <Child>First</Child>
                <Child>Second</Child>
                <Child>Third</Child>
                <Child>Fourth</Child>
                <Child>Fifth</Child>
                <Child>Sixth</Child>
            </EqualDivider>
        </Container>
    )
  } 

  export default App;