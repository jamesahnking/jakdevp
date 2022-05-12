import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project1Description from '../components/Project/Project1Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjOne } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';



const Project1 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjOne}/>
      <Project1Description {...HomeObjOne}/>
      <VideoDemoGrid {...HomeObjOne} /> 
      <ProjectEditorialPriCntr {...HomeObjOne} />
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project1;