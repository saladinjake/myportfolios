import React, { useState, useContext, useEffect } from 'react';
import Data from '../data/sample_projects.json';

let AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  let [projectsData, setProjectsData] = useState(Data);
  let [sortBy, setSortBy] = useState('hight');
  let [isPopupOpen, setIsPopupOpen] = useState(false);
  let [projectId, setProjectId] = useState(null);

  let openProjectPopup = (id) => {
    setIsPopupOpen(true);
    setProjectId(id);
  };
  let closeProjectPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        projectsData,
        setProjectsData,
        sortBy,
        setSortBy,
        openProjectPopup,
        closeProjectPopup,
        isPopupOpen,
        projectId,
        setProjectId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};