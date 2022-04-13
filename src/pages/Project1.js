import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectDescription from '../components/Project/ProjectDescription';
import VideoDemoGrid from '../components/Project/VideoDemoGrid';
import { HomeObjOne } from "../components/Data";



const Project1 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjOne}/>
      <ProjectDescription {...HomeObjOne}/>
      <VideoDemoGrid {...HomeObjOne} /> 

    </>
  )
}

export default Project1;