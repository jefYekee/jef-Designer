import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  SectionBadge,
  Title,
  Desc,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer,
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')

  const filtered =
    toggle === 'all'
      ? projects
      : projects.filter((item) => item.category === toggle)

  return (
    <Container id="projects">
      <Wrapper>
        <SectionBadge>Portfolio</SectionBadge>
        <Title>Featured <span>Projects</span></Title>
        <Desc>
          A selection of things I've built — from web apps to mobile and graphic design work.
        </Desc>

        <ToggleButtonGroup>
          {['all', 'web app', 'android app', 'graphic design'].map((cat, i, arr) => (
            <React.Fragment key={cat}>
              <ToggleButton
                active={toggle === cat}
                onClick={() => setToggle(cat)}
              >
                {cat === 'all' ? 'All' : cat === 'web app' ? "Web Apps" : cat === 'android app' ? 'Mobile Apps' : 'Graphic Design'}
              </ToggleButton>
              {i < arr.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects