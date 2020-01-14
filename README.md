# zap-styled-components

## Chapter 1 - Create Button

1. git clone & setting

   - git clone

   ```
   git clone https://github.com/h662/zap-coding-react-starter.git
   ```

   - rename folder

     - zap-coding-react-starter -> zap-coding-styled-components

   - start coding

2. yarn install (If yarn is not installed, install yarn first.)

   ```

   yarn install

   ```

3. yarn add styled-components

   ```

   yarn add styled-components

   ```

4. create Button.js file

   - Button.js

   ```
   import styled from "styled-components";

   const Button = styled.a`
   display: inline-block;
   border-radius: 3px;
   padding: 0.5rem 0;
   margin: 0.5rem 1rem;
   width: 7rem;
   background: #449d44;
   border: 2px solid #398439;
   text-align: center;
   color: #ffffff;
   `;

   export default Button;
   ```

5. import & use Button.js

   - App.js

   ```
   import React from "react";

   import Button from "./Button";

   const App = () => {
   return (
       <>
       <h1>Hello React!</h1>
       <Button
           href="https://github.com/h662/zap-styled-components"
           target="_blank"
           rel="noopener"
       >
           myGitHub
       </Button>
       </>
   );
   };

   export default App;
   ```

6. yarn start & ckeck
   ```
   yarn start
   ```
   - http://localhost:3000
