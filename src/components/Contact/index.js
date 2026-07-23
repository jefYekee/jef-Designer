import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar, Alert } from '@mui/material'
import {
  Container,
  GlowLeft,
  GlowRight,
  GridLines,
  Wrapper,
  Badge,
  DotPulse,
  Title,
  Desc,
  Inner,
  InfoSide,
  InfoHeading,
  InfoText,
  InfoList,
  InfoItem,
  InfoIconWrap,
  InfoLabel,
  InfoValue,
  ContactForm,
  ContactTitle,
  InputRow,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from './ContactStyle'

const Contact = () => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('success')
  const [sending, setSending] = useState(false)
  const form = useRef()

  const resetForm = () => form.current.reset()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs
      .sendForm('service_np7yap3', 'template_38b2od8', form.current, '4jPxT8KA9ZrQMmYu2')
      .then(() => {
        setStatus('success')
        setOpen(true)
        resetForm()
        setSending(false)
      })
      .catch(() => {
        setStatus('error')
        setOpen(true)
        setSending(false)
      })
  }

  return (
    <Container id="contact">
      <GridLines />
      <GlowLeft />
      <GlowRight />

      <Wrapper>
        <Badge><DotPulse /> Let's Connect</Badge>
        <Title>Let's Build <span>Something Great</span></Title>
        <Desc>
          Have a project in mind or just want to say hi? My inbox is always open.
        </Desc>

        <Inner>
          <InfoSide>
            <InfoHeading>Get In Touch</InfoHeading>
            <InfoText>
              Whether it's a full product build, a brand refresh, or just an idea
              you want to talk through — I'd love to hear about it.
            </InfoText>

            <InfoList>
              <InfoItem>
                <InfoIconWrap>📧</InfoIconWrap>
                <div>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>jefyekee@gmail.com</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIconWrap>📍</InfoIconWrap>
                <div>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>Kigali, Rwanda</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIconWrap>⚡</InfoIconWrap>
                <div>
                  <InfoLabel>Availability</InfoLabel>
                  <InfoValue>Open to new projects</InfoValue>
                </div>
              </InfoItem>
            </InfoList>
          </InfoSide>

          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Send a Message</ContactTitle>

            <InputRow>
              <ContactInput placeholder="Your Name" type="text" name="user_name" required />
              <ContactInput placeholder="Your Email" type="email" name="user_email" required />
            </InputRow>

            <ContactInput placeholder="Subject" type="text" name="subject" required />
            <ContactInputMessage placeholder="Your message..." rows="5" name="message" required />

            <ContactButton type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message ↗'}
            </ContactButton>
          </ContactForm>
        </Inner>
      </Wrapper>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={status} variant="filled" onClose={() => setOpen(false)}>
          {status === 'success' ? 'Message sent successfully!' : 'Something went wrong. Please try again.'}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Contact