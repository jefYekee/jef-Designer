import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(10, 10, 26, 0.85);
backdrop-filter: blur(4px);
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: #0d0d2b;
border: 1px solid rgba(255, 255, 255, 0.08);
color: #fff;
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
font-family: 'Poppins', sans-serif;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.65);
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #00C7EF;
    margin: 4px;
    padding: 4px 10px;
    border-radius: 50px;
    background-color: rgba(0, 199, 239, 0.1);
    border: 1px solid rgba(0, 199, 239, 0.2);
    @media only screen and (max-width: 600px) {
        font-size: 11px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: #fff;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    padding: 13px 16px;
    border-radius: 10px;
    background: linear-gradient(135deg, #00C7EF, #5d00ff);
    box-shadow: 0 0 24px rgba(0, 199, 239, 0.25);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 0 36px rgba(0, 199, 239, 0.4);
        transform: translateY(-2px);
    }
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const CloseBtn = styled.div`
    position: absolute;
    top: 14px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    transition: background 0.2s ease;
    z-index: 5;
    &:hover {
        background: rgba(0, 199, 239, 0.3);
    }
`;

const NavBtn = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(10, 10, 26, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    transition: all 0.2s ease;
    z-index: 4;
    &:hover {
        background: rgba(0, 199, 239, 0.25);
        border-color: rgba(0, 199, 239, 0.4);
    }
    &.prev { left: 12px; }
    &.next { right: 12px; }
`;

const ImageWrap = styled.div`
    position: relative;
    margin-top: 30px;
`;

const DotsRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
`;

const ImgDot = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    cursor: pointer;
    background: ${({ active }) => active ? '#00C7EF' : 'rgba(255,255,255,0.2)'};
    box-shadow: ${({ active }) => active ? '0 0 8px rgba(0,199,239,0.6)' : 'none'};
    transition: all 0.2s ease;
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const [activeIndex, setActiveIndex] = React.useState(0);

    if (!project) return null;

    const gallery = project.images && project.images.length > 0
        ? project.images
        : [project.image];
    const hasMultiple = gallery.length > 1;

    const goPrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };
    const goNext = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };
    const handleClose = () => {
        setActiveIndex(0);
        setOpenModal({ state: false, project: null });
    };

    return (
        <Modal open={true} onClose={handleClose}>
            <Container>
                <Wrapper>
                    <CloseBtn onClick={handleClose}>
                        <CloseRounded fontSize="small" />
                    </CloseBtn>

                    <ImageWrap>
                        <Image src={gallery[activeIndex]} />
                        {hasMultiple && (
                            <>
                                <NavBtn className="prev" onClick={goPrev}>‹</NavBtn>
                                <NavBtn className="next" onClick={goNext}>›</NavBtn>
                            </>
                        )}
                    </ImageWrap>

                    {hasMultiple && (
                        <DotsRow>
                            {gallery.map((_, i) => (
                                <ImgDot
                                    key={i}
                                    active={i === activeIndex}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </DotsRow>
                    )}

                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>

                    <ButtonGroup>
                        {project.webapp && !project.category.includes('graphic design') && (
                            <Button href={project?.webapp} target='_blank' rel="noreferrer">View Live App</Button>
                        )}
                    </ButtonGroup>

                </Wrapper>
            </Container>

        </Modal>
    )
}

export default ProjectDetails