import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import data from '../../data/sample_projects.json';

const NavgationBarFilters = () => {
  let { projectsData, setProjectsData, setSortBy, sortBy } = useGlobalContext();
  let [technologys, setTechnologys] = useState([]);
  const [title, setTitle] = useState('');

  //filter by grow (small or big ..)
  let filterWithGrow = (e) => {
    let current = e.target.value;
    if (current === 'all') {
      setProjectsData(data);
    } else {
      setProjectsData(
        data.filter((item) => item.projectTypes.size === current)
      );
    }
  };

  // big project default
  useEffect(() => {
    // setProjectsData(
    //      data.filter((item) => item.projectTypes.size === "big")
    //  );
  }, []);

  //filter by daynamix
  let filterWithDynamic = (e) => {
    let current = e.target.value;
    if (current === 'all') {
      setProjectsData(data);
    } else {
      if (current === 'ui') {
        current = false;
      }
      if (current === 'dynamic') {
        current = true;
      }
      setProjectsData(data.filter((item) => item.dynamic === current));
    }
  };

  React.useEffect(() => {
    let arrKeys = [];
    projectsData.map((tech) => {
      arrKeys.push(...Object.keys(tech.technologys[0]));
      let uniqueArrKeys = arrKeys
        .reduce(
          (state, action) => {
            if (!state.includes(action)) {
              state.push(action);
            }
            return state;
          },
          ['all']
        )
        .filter((item) => item !== 'html' && item !== 'css');

      setTechnologys(uniqueArrKeys);
    });
  }, []);

  // filter with tech
  let handelFilterTechnologys = (e) => {
    let current = e.target.value;
    if (current === 'all') {
      setProjectsData(data);
    } else {
      let technologysChoose = [];
      data.filter((item) =>
        item.technologys.map((tech) => {
          for (const key in tech) {
            if (key === current) {
              technologysChoose.push(item);
            }
          }
        })
      );
      setProjectsData(technologysChoose);
    }
  };

  // filter with tech

  useEffect(() => {
    if (sortBy === 'hight') {
      setTitle('Sort From hight Rating To low');
    } else if (sortBy === 'low') {
      setTitle('Sort From Low Rating To hight');
    } else {
      setTitle('');
    }
  }, [sortBy]);
  return (
    <>
      <section className="navigation-bar" id="projects">
        <div className="navigation-bar-container">
          <form action="">
            <span className="form-title">select items</span>
            <div className="select-container">
              <select id="rate" onChange={(e) => setSortBy(e.target.value)}>
                <option value="" hidden>
                  Sort By rating
                </option>
                <option defaultValue="hight" value="hight">
                  hight to low
                </option>
                <option value="low">low to hight</option>
                <option value="default">default</option>
              </select>
              <span className="custom-arrow"></span>
            </div>
            <div className="select-container">
              <select id="grow" onChange={filterWithGrow}>
                <option value="" hidden>
                  Select By grow
                </option>
                <option value="big">only big projects</option>
                <option value="medium">only medium projects</option>
                <option value="small">only small projects</option>
                <option value="all">all</option>
              </select>
              <span className="custom-arrow"></span>
            </div>
            <div className="select-container">
              <select id="" onChange={filterWithDynamic}>
                <option value="" hidden>
                  Select type
                </option>
                <option value="dynamic">just Dynamic projects</option>
                <option value="ui">Just UI</option>
                <option value="all">all types</option>
              </select>
              <span className="custom-arrow"></span>
            </div>

            <div className="select-container">
              <select onChange={handelFilterTechnologys}>
                <option value="" hidden>
                  Select technology
                </option>
                {technologys
                  .sort()
                  .reverse()
                  .map((tech, index) => (
                    <option key={index} value={tech}>
                      {tech}
                    </option>
                  ))}
              </select>
              <span className="custom-arrow"></span>
            </div>

            <button type="button" className="search">
              search
            </button>
          </form>
          <h2 style={{ color: '#4e5866' }}>{title}</h2>
        </div>
      </section>
    </>
  );
};

export default NavgationBarFilters;