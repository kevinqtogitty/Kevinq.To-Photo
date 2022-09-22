import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-left: 21rem;
  height: 100vh;
  width: calc(100vw - 21rem);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    align-items: flex-start;
    position: absolute;
    top: 7rem;
    margin-left: 0rem;
    height: fit-content;
    width: 100%;
    z-index: -1;
  }
`;

const FormContainer = styled.div`
  height: fit-content;
  width: fit-content;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0rem 1rem 0rem 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(228, 228, 208, 0.7);
  border-radius: 10px;
`;

const Input = styled.input`
  margin-bottom: 1.2rem;
  height: 1.5rem;
  max-width: 15rem;
  border-radius: 5px;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  width: 30rem;
  height: 10rem;
  padding: 0.5rem;
  @media (max-width: 500px) {
    width: auto;
    height: 10rem;
  }
`;

const FormSubmissionButton = styled.button`
  width: 5rem;
  height: 2.6rem;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: whitesmoke;
  border-radius: 10px;
  cursor: pointer;
`;

export {
  MainWrapper,
  FormContainer,
  Input,
  TextArea,
  FormSubmissionButton,
  ContactForm
};
