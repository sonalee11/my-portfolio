import React from 'react'
import Project from '../componenets/Projects'
import mental_helth_project from "../assets/mental_health.png"
import shopify_project from "../assets/shopify.png"
import crudApp_project from "../assets/crudapp2.png"

const ProjectsPage = () => {
  return (
    <div className='flex gap-10 mt-10 justify-center'>
      <Project  title="Mental Health Consulting Project" desc="It is Consulting web App for teengers Strugglin With mental healath issues." image={mental_helth_project} Link=""  / >
      <Project title="shopify project" desc="E-commerce websie for clothes" image={shopify_project} link=""/>
      <Project title="crudApp_project" desc="crud app" image={crudApp_project} link=""/>
      
    </div>
  )
}

export default ProjectsPage
