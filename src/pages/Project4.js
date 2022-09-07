import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project4Description from '../components/Project/Project4Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjFour } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';
import ProjectEditorialPriCntSec from '../components/Project/ProjectEditorialPriCntSec';
import ProjectEditorialPriCntTer from '../components/Project/ProjectEditorialPriCntTer';
import ProjectEditorialPriCntQua from '../components/Project/ProjectEditorialPriCntQua';



const Project4 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjFour}/>
      <Project4Description {...HomeObjFour}/>
      <ProjectEditorialPriCntr {...HomeObjFour} />
      <ProjectEditorialPriCntSec {...HomeObjFour} />
      <ProjectEditorialPriCntTer {...HomeObjFour} />
      <ProjectEditorialPriCntQua {...HomeObjFour} />
      <VideoDemoGrid {...HomeObjFour} /> 

      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project4;