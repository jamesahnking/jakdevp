import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project2Description from '../components/Project/Project2Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjTwo } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';



const Project2 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjTwo}/>
      <Project2Description {...HomeObjTwo}/>
      <VideoDemoGrid {...HomeObjTwo} /> 
      <ProjectEditorialPriCntr {...HomeObjTwo} />
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project2;