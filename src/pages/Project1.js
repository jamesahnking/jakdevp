import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectDescription from '../components/Project/ProjectDescription';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjOne,EdBox1,EdBoxImgL,EdBoxImgR  } from "../components/Data";
import ProjectEditorialPri from '../components/Project/ProjectEditorialPri';
import ProjectEditiorialSec from '../components/Project/ProjectEditiorialSec';



const Project1 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjOne}/>
      <ProjectDescription {...HomeObjOne}/>
      <VideoDemoGrid {...HomeObjOne} /> 
      <ProjectEditorialPri {...HomeObjOne} />
      <ProjectEditiorialSec {...HomeObjOne} />
      <ProjectEditiorialSec {...HomeObjOne} />

    </>
  )
}

export default Project1;