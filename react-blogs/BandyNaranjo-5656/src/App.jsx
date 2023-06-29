import Card from "/components/Card/Card";
import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";
import Heading from "/components/Heading/Heading";
import Paragraph from "/components/Paragraph/Paragraph";
import Image from "/components/Image/Image";

import tabs from "/data/tabs.json"

const articles = [{
  unsplashId:"miyuki.jpg",
  unsplashAlt:"Miyuki",
  title:"Miyuki Accessories",
  paragraph:"When I was in University I used to make accessories in miyuki and I had a brand called Sweet Orange, now I only make accessories for personal use."
},
{
  unsplashId:"macrame.jpg",
  unsplashAlt:"Macrame",
  title:"Macrame Crafts",
  paragraph:"I have been making macrame crafts since the pandemic, it was one of my ways of coping with the confinement."
},
{
  unsplashId:"crossfit.jpg",
  unsplashAlt:"Crossfit.",
  title:"Crossfit",
  paragraph:"I practice crossfit for 3 years about 4 or 5 times a week."
},
{
  unsplashId:"yoga.jpeg",
  unsplashAlt:"Yoga",
  title:"Yoga",
  paragraph:"Yoga was another of the activities that I adopted in the pandemic, I still practice it."
}];

function App() {
  return (
    <>
      <Header tabs = {tabs}></Header>
      <section id="profile">
      <div className="abouMe">
        <Heading color='white' size='lg'>About me</Heading>
        <figure>
          <Image type='avatar' src="images/BandyNaranjo.png" alt="Imagen Bandy Naranjo"></Image>
            <figcaption><Heading color='dark-grey' size='sm'>✨ Luz Bandy Naranjo ✨</Heading> </figcaption>
        </figure>
        <Paragraph color='dark-grey'>
        I am a bioengineer with experience working as a database administrator for one and a half years, managing Oracle and SQL Server database engines. 
        Additionally, I have worked as a mainframe developer for another one and a half years. Currently, I have been working as a Salesforce developer for a year, 
        where I create classes in Apex, controllers, and LWC (Lightning Web Components). I have knowledge in Javascript, React, Node.js, and NextJS.
        </Paragraph>
      </div>
      </section>
      <section id="experience">
        <Heading color='white' size='lg'>Experience</Heading>
        <div className="experience">
            <div>
              <Paragraph color='dark-grey'>🌱 Junior Salesforce Developer -- Forté Group since April 2022</Paragraph>
              <ul>
                <li>Create/modify controllers, triggers, apex classes, LWC</li>
                <li>Work with Declarative Automation as Process Builder, Workflows and Flows</li>
                <li>Knowledge of agile methodologies (SCRUM)</li>
                <li>Knowledge in deploys, CI/CD</li>
              </ul>
            </div>
            <div>
              <Paragraph color='dark-grey'>🌱 Application Developer Engineer trainee -- Unisys 2020-20222</Paragraph>
              <ul>
                <li>Automatización RPA</li>
                <li>Backend mainframe development with EAE</li>
                <li>Develpment with C Sharp and .NET</li>
              </ul>
            </div>
            <div>
              <Paragraph color='dark-grey'>🌱 Enterprise SYS SPT - Analyst 4 -- Unisys 2019-2020</Paragraph>
              <ul>
                <li>Installation, configuration, migration by administration of databases</li>
                <li>Database clone and restore</li>
                <li>Create users/schemas and grant/revoke permissions</li>
                <li>Installation, configuration and administration of Reporting Services</li>
              </ul>
            </div>
            <div>
              <Paragraph color='dark-grey'>🌱 Robotics Teacher -- Pygmalion 2018-2019</Paragraph>
              <ul>
                <li>Teach programming classes to high school students</li>
              </ul>
            </div>
            <div>
              <Paragraph color='dark-grey'>🌱 Assistant Professor University of Antioquia</Paragraph>
              <ul>
                <li>Counseling and support to Students in Digital Electronics II and Metrology</li>
                <li>Support in reviewing and qualifying evaluations</li>
              </ul>
            </div>
          </div>
      </section>
      <section id="education">
        <Heading color='white' size='lg'>Education</Heading>
        <ul>
            <li>Salesforce Bootcamp - Forté Group</li>
            <li>English Bootcamp - Team International</li>
            <li>Bachelor degree in Bioengineering - University of Antioquia</li>
        </ul>  
        <Heading color='white' size='lg'>Certifications</Heading>
        <ul>
            <li>Development Course - Oficina de la OIT para los Países Andinos</li>
            <li>Scrum Master Professional Certificate - SMPC - Certiprof</li>
            <li>Scrum Developer Professional Certificate - Certiprof</li>
        </ul>
      </section>
      <section id="hobbies">
        <Heading color='white' size='lg'>Hobbies</Heading>
        <div className="hobbies">
          {articles?.map(article => <Card {...article} />)}
        </div>
      </section> 
      <Footer></Footer>
    </>
  )
}

export default App
