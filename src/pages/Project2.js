import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project2Description from '../components/Project/Project2Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjTwo } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';
import ProjectEditorialPriCntSec from '../components/Project/ProjectEditorialPriCntSec';
import ProjectEditorialPriCntTer from '../components/Project/ProjectEditorialPriCntTer';
import ProjectEditorialPriCntQua from '../components/Project/ProjectEditorialPriCntQua';



const Project2 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjTwo}/>
      <Project2Description {...HomeObjTwo}/>
      <ProjectEditorialPriCntr {...HomeObjTwo} />
      <ProjectEditorialPriCntSec {...HomeObjTwo} />
      <ProjectEditorialPriCntTer {...HomeObjTwo} />
      <ProjectEditorialPriCntQua {...HomeObjTwo} />
      <VideoDemoGrid {...HomeObjTwo} /> 

      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project2;