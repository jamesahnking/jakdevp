import React from 'react';
import ProjectHeader from '../components/Project/ProjectHeader';
import Project5Description from '../components/Project/Project5Description';
import { HomeObjFive } from "../components/Data";



const Project5 = () => {
  return (
    <>
      <ProjectHeader {...HomeObjFive}/>
      <Project5Description {...HomeObjFive}/>

    </>
  )
}

export default Project5;