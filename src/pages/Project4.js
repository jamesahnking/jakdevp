import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project3Description from '../components/Project/Project2Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjFour } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';



const Project4 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjFour}/>
      <Project3Description {...HomeObjFour}/>
      <VideoDemoGrid {...HomeObjFour} /> 
      <ProjectEditorialPriCntr {...HomeObjFour} />
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project4;