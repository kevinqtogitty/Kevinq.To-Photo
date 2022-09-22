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
  const email = import.meta.env.EMAIL;
  console.log(email);
  return (
    <MainWrapper>
      <FormContainer className="formContainer">
        <ContactForm action={`https://formsubmit.co/${email}`} method="POST">
          <h3>Get in touch!</h3>

          <label htmlFor="name">Name: </label>
          <Input type="text" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email: </label>
          <Input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

          <label htmlFor="message">Message: </label>
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
