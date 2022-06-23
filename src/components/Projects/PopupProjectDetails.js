import React from 'react';
import { useGlobalContext } from '../../context';
import { BiCodeAlt } from 'react-icons/bi';
import { AiFillEye, AiOutlineClose } from 'react-icons/ai';

const PopupProjectDetails = ({ id }) => {
  let { projectsData, closeProjectPopup } = useGlobalContext();

  let theItem = projectsData.filter((item) => item.id.id === id)[0];
  let {
    title,
    desc,
    thumbnail,
    imagesURL,
    projectTypes,
    technologys,
    time_upload,
    rating,
    components,
    features,
    pages,
    dynamic,
    responsive,
    themes,
    colors,
    fonts,
    code,
    websiteURL,
    githubURL,
    lightHouse,
    feedback,
    lines_of_code,
  } = theItem;

  let test = (e) => {
    let target = e.target;
    if (
      target.classList.contains('project-popup') ||
      target.classList.contains('close-btn')
    ) {
      closeProjectPopup();
    }
  };

  // map in project types
  let projectTypeGenrate = () => {
    let arr = [];
    for (const key in projectTypes) {
      arr.push(
        <li key={key}>
          {key} : {projectTypes[key]}
        </li>
      );
    }
    return arr;
  };

  return (
    <section className="project-popup" onClick={test}>
      <div className="project-popup-container">
        <div className="title-section">
          <h2>{title}</h2>
          <p className="desc">{desc}</p>
        </div>
        <div className="btns_and_technologys">
          <div className="tech-names">
            <p>technologys:</p>
            {Object.keys(technologys[0]).map((techName, index) => {
              return (
                <div
                  title={techName}
                  key={index}
                  className="thumbnail-container"
                >
                  <img src={`./images/icons/${techName}.png`} alt={techName} />
                </div>
              );
            })}
          </div>
          <div className="btns">
            <button className="btn">
              <a href={websiteURL} target="_blank">
                live preview <AiFillEye />
              </a>{' '}
            </button>
            <button className={`btn ${code === 'private' ? 'disabled' : null}`}>
              {' '}
              <a href={code === 'private' ? null : githubURL} target="_blank">
                code {code === 'private' && 'private'} <BiCodeAlt />
              </a>{' '}
            </button>
          </div>
        </div>
        <div className="images-grid">
          {imagesURL.map((imgURL, index) => {
            return (
              <div key={index} className="thumbnail-container">
                <img src={imgURL} draggable="false" alt={thumbnail} />
              </div>
            );
          })}
        </div>
        <section className="project-info">
          <div className="project-info-container">
            <div className="about-project">
              <div>
                {/* project types*/}
                <ul>
                  {/* get tech names and values and draw it at JSX */}
                  <span>technologys :</span>
                  {technologys.map((tech) => {
                    let arr = [];
                    for (const key in tech) {
                      if (key) {
                        arr.push(
                          <a key={key}>
                            {key}{' '}
                            {tech[key].join(', ')
                              ? ` : ( ${tech[key].join(', ')} )`
                              : ''}
                          </a>
                        );
                      }
                    }
                    return arr;
                  })}
                </ul>
                <br />
                {/* project types*/}
                <ul>
                  <span>project types :</span>
                  {projectTypeGenrate()}
                  {time_upload && <li>upload time : {time_upload}</li>}
                </ul>
                <br />
                {/* project requirements */}
                <ul>
                  <span>project requirements:</span>
                  {/* component */}
                  {components && (
                    <ul style={{ color: 'gold' }} className="front-end">
                      <div> components </div>
                      {components.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {/* features and actions*/}
                  {features && (
                    <ul
                      className="features"
                      style={{ textAlign: 'left', color: 'gold' }}
                    >
                      {' '}
                      <div> features and actions </div>{' '}
                      <li style={{ flexDirection: 'column' }}>
                        {' '}
                        {features.map((item, index) => (
                          <span key={index}>{item} </span>
                        ))}
                      </li>
                    </ul>
                  )}
                  {/* others */}
                  {pages && <li>pages : {pages}</li>}
                  <li>{`responsive : ${responsive ? 'yes' : 'non'}`}</li>
                  <li>{`dynamic : ${dynamic ? 'yes' : 'non'}`}</li>
                  <li>{`themes : ${themes.join(' and ')}`}</li>
                  <li className="color">
                    colors :{' '}
                    {colors.map((item, index) => (
                      <span
                        key={index}
                        title={item}
                        className="color"
                        style={{ backgroundColor: item }}
                      ></span>
                    ))}{' '}
                  </li>
                  <li>{`fonts : ${fonts.join(' and ')}`}</li>
                  {rating && <li>rating : {rating}</li>}
                  {lines_of_code && <li> line of code : {lines_of_code}</li>}
                </ul>
                {/* light house */}
                {lightHouse && (
                  <ul style={{ gap: '5px' }}>
                    <span style={{ marginBottom: '20px' }}>
                      light house (test)
                    </span>
                    {lightHouse.map((item) =>
                      Object.entries(item).map((theItem, index) => (
                        <li key={index}> {theItem.join(' : ')} </li>
                      ))
                    )}
                  </ul>
                )}
                {/* links */}
                <ul>
                  <span>links</span>
                  {websiteURL && (
                    <li>
                      {' '}
                      live preview :
                      <a
                        style={{ textDecoration: 'underline' }}
                        href={websiteURL}
                        target="_blank"
                      >
                        {websiteURL}
                      </a>
                    </li>
                  )}
                  {
                    <li>
                      {' '}
                      github :
                      <a
                        className={`${!githubURL && 'btn disabled'}`}
                        style={{
                          textDecoration: githubURL ? 'underLine' : 'none',
                        }}
                        href={githubURL && githubURL}
                        target="_blank"
                      >
                        {githubURL ? githubURL : ' privet code '}
                      </a>
                    </li>
                  }
                </ul>
                {/* feed back */}
                {feedback && <span>feedback : {feedback}</span>}
              </div>
            </div>
          </div>
        </section>
      </div>

      <button className="btn close-btn">
        <AiOutlineClose />
      </button>
    </section>
  );
};

export default PopupProjectDetails;