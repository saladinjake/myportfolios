import { FaEye } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import PopupProjectDetails from './PopupProjectDetails';
import { useGlobalContext } from '../../context';
// import './styles.css';

const Cards = () => {
  let {
    projectsData,
    sortBy,
    openProjectPopup,
    isPopupOpen,
    projectId,
    setProjectId,
  } = useGlobalContext();

  let handleImageMouseOver = (e) => {
    e.currentTarget.querySelector('.inner-thumbnail').classList.add('active');
  };
  let handleImageMouseLeave = (e) => {
    e.currentTarget
      .querySelector('.inner-thumbnail')
      .classList.remove('active');
  };

  let handleImageClick = (e) => {
    // if target thumbnail =>
    if (e.target.classList.contains('thumbnail')) {
      openProjectPopup();
    }
  };

  //sort and draw
  let drawUi = () => {
    if (sortBy == 'hight') {
      projectsData.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy == 'low') {
      projectsData.sort((a, b) => a.rating - b.rating);
    }

    return projectsData.slice(0, 12).map((project) => {
      let {
        id: { id },
        title,
        desc,
        thumbnail,
        technologys,
        projectTypes: { type },
        websiteURL,
        githubURL,
      } = project;
      return (
        <div className="card" key={id}>
          <div
            className="thumbnail-card-container"
            onClick={(e) => {
              handleImageClick(e);
              setProjectId(id);
            }}
            onMouseEnter={handleImageMouseOver}
            onMouseLeave={handleImageMouseLeave}
          >
            <img
              className="thumbnail"
              src={thumbnail}
              alt={`${title} thumbnail`}
            />
            <div className={`inner-thumbnail`}>
              <a href={websiteURL} target="_blank">
                <FaEye></FaEye>
              </a>
              <a
                className={`${githubURL ? '' : 'btn disabled'}`}
                href={`${githubURL && githubURL}`}
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
          <div className="card-info">
            <div className="title">
              <h3
                onClick={() => {
                  openProjectPopup(id);
                }}
              >
                {title}
              </h3>
              <span className="type">{`(${type})`}</span>
            </div>
            <p className="desc">{`${
              desc.length > 65 ? desc.substring(0, 65) + '...' : desc
            }`}</p>
            <div className="technologys">
              {/* loop  technologys*/}
              {Object.keys(technologys[0]).map((tech) => {
                if (tech === 'javascript') {
                  tech = 'js';
                }
                return (
                  <span key={tech} className={`badge badge-${tech}`}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          {isPopupOpen && (
            <PopupProjectDetails
              key={projectId}
              id={projectId}
            ></PopupProjectDetails>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <section style={{ marginTop: '50px' }} className="project-cards">
        <div className="project-cards-container">{drawUi()}</div>
      </section>
    </>
  );
};

export default Cards;