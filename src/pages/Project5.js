import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project3Description from '../components/Project/Project2Description';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjFive } from "../components/Data";
import ProjectEditorialPriCntr from '../components/Project/ProjectEditorialPriCntr';



const Project5 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjFive}/>
      <Project3Description {...HomeObjFive}/>
      {/* <VideoDemoGrid {...HomeObjFive} />  */}
      {/* <ProjectEditorialPriCntr {...HomeObjFive} /> */}
      {/* <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />      
      <ProjectEditiorialSec  {...HomeObjOne} />       */}
    </>
  )
}

export default Project5;