import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project3Description from '../components/Project/Project3Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjThree } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';



const Project3 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjThree}/>
      <Project3Description {...HomeObjThree}/>
      <VideoDemoGrid {...HomeObjThree} /> 
      <ProjectEditorialPriCntr {...HomeObjThree} />
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project3;