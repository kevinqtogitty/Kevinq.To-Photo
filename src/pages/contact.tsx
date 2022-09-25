import React from 'react';
import {
  MainWrapper,
  Input,
  ContactForm,
  FormContainer,
  TextArea,
  FormSubmissionButton
} from '../stylesheets/form_styles';

const Contact = () => {
  const email = import.meta.env.VITE_EMAIL;
  return (
    <MainWrapper>
      <FormContainer className="formContainer">
        <ContactForm action={`https://formsubmit.co/${email}`} method="POST">
          <h1>Get in touch!</h1>

          <label htmlFor="name">Name: </label>
          <br />
          <Input type="text" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email: </label>
          <br />
          <Input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

          <label htmlFor="message">Message: </label>
          <br />

          <TextArea name="message" placeholder="Yo Kev!" />
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_template" value="table" />

          <FormSubmissionButton type="submit">Send</FormSubmissionButton>
        </ContactForm>
      </FormContainer>
    </MainWrapper>
  );
};

export default Contact;
