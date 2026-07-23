import React from 'react'
import {
  Container,
  GridLines,
  GlowLeft,
  GlowRight,
  Wrapper,
  Badge,
  DotPulse,
  Title,
  Desc,
  CardsRow,
  TestimonialCard,
  QuoteMark,
  QuoteText,
  Divider,
  ClientRow,
  Avatar,
  ClientInfo,
  ClientName,
  ClientRole,
  Stars,
} from './TestimonialsStyle'

const testimonials = [
  {
    id: 1,
    quote:
      "I would love to appreciate you for this flyer — it has attracted the attention of many clients with its exceptional beauty. Thank you so much!",
    name: "Anonymous Client",
    role: "Flyer Design Client",
    initials: "AC",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "It was really nice working with you and the team. We appreciate the end result. We shall definitely be contacting you back for more projects — thanks and regards.",
    name: "Hillary",
    role: "Logo & Brand Identity Client",
    initials: "H",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Have a project in mind? I'd love to hear about it and help bring your vision to life.",
    name: "Your name here",
    role: "Future Client",
    initials: "?",
    stars: null,
    isCTA: true,
  },
]

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <GridLines />
      <GlowLeft />
      <GlowRight />

      <Wrapper>
        <Badge><DotPulse /> Client Love</Badge>
        <Title>What Clients <span>Say</span></Title>
        <Desc>
          Real feedback from real people I've had the pleasure of working with.
        </Desc>

        <CardsRow>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} isCTA={t.isCTA}>
              {!t.isCTA && <Stars>{'★'.repeat(t.stars)}</Stars>}
              <QuoteMark>{t.isCTA ? '✉' : '"'}</QuoteMark>
              <QuoteText isCTA={t.isCTA}>{t.quote}</QuoteText>
              <Divider />
              <ClientRow>
                <Avatar isCTA={t.isCTA}>{t.initials}</Avatar>
                <ClientInfo>
                  <ClientName>{t.name}</ClientName>
                  <ClientRole>{t.role}</ClientRole>
                </ClientInfo>
              </ClientRow>
              {t.isCTA && (
                <a
                  href="#contact"
                  style={{
                    marginTop: '16px',
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #00C7EF, #5d00ff)',
                    color: '#fff',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Get In Touch ↗
                </a>
              )}
            </TestimonialCard>
          ))}
        </CardsRow>
      </Wrapper>
    </Container>
  )
}

export default Testimonials