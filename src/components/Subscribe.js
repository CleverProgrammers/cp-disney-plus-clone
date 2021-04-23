import styled from "styled-components";


const SubscribeNow = (props) => {
    return (
        <Subscribe>Assign Now</Subscribe>
    );
  };

  const Subscribe = styled.section`
  background-color: #0063e5;
  padding: 8px 16px;
  text-transform: uppercase;
  -webkit-letter-spacing: 1.5px;
  -moz-letter-spacing: 1.5px;
  -ms-letter-spacing: 1.5px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-left: auto;
  margin-right: 10px;
  &:hover {
    background-color: #0483ee;
  }
`;
export default SubscribeNow;
  