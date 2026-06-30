import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 199, 239, 0.35);
    box-shadow: 0 0 40px rgba(0, 199, 239, 0.12);
  }

  &:hover .card-btn {
    opacity: 1;
    transform: translateY(0);
  }
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 26, 0.95) 100%);
`

const Body = styled.div`
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #00C7EF;
  background: rgba(0, 199, 239, 0.1);
  border: 1px solid rgba(0, 199, 239, 0.2);
  padding: 3px 10px;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
`

const Title = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const DateLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.35);
  font-family: 'Poppins', sans-serif;
  margin-top: -4px;
`

const Description = styled.div`
  font-size: 0.875rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Poppins', sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: -8px;
  border: 2px solid rgba(10, 10, 26, 0.9);
  object-fit: cover;
`

const ViewBtn = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: #00C7EF;
  font-family: 'Poppins', sans-serif;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: '→';
  }
`

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <ImageWrap>
        <Image src={project.image} alt={project.title} />
        <ImageOverlay />
      </ImageWrap>

      <Body>
        <Tags>
          {project.tags?.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>

        <Title>{project.title}</Title>
        <DateLabel>{project.date}</DateLabel>
        <Description>{project.description}</Description>

        <Footer>
          <Members>
            {project.member?.map((member, i) => (
              <Avatar key={i} src={member.img} alt={member.name} />
            ))}
          </Members>
          <ViewBtn className="card-btn">View Project</ViewBtn>
        </Footer>
      </Body>
    </Card>
  )
}

export default ProjectCards