import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project1Description from '../components/Project/Project1Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjOne } from "../components/Data";
import ProjectEditorialPri from '../components/Project/ProjectEditorialPri';
import ProjectEditiorialSec from '../components/Project/ProjectEditiorialSec';



const Project1 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjOne}/>
      <Project1Description {...HomeObjOne}/>
      <VideoDemoGrid {...HomeObjOne} /> 
      <ProjectEditorialPri {...HomeObjOne} />
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project1;