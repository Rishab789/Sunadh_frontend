import React from 'react'
import AWS from '../public/assets/AWS-course.webp'
import Azure from '../public/assets/Azure-Course-Hyderabad.webp'
import AzureData from '../public/assets/Azure-Data-Factory-3.webp'
import banner from '../public/assets/banner.webp'
import DevOps from '../public/assets/DevOps-Training-Hyderabad-1.webp'
import FullStack from '../public/assets/Fullstack-Development.webp'
import mern from '../public/assets/mern.webp'
import MuleSoft from '../public/assets/Mulesoft.webp'
import PowerBI from '../public/assets/Power-BI-course.webp'
import Python from '../public/assets/Python-Development.webp'
import Salesforce from '../public/assets/salesforce.webp'
import SnowFlake from '../public/assets/Snowflake-Course-hyderabad.webp'
import Tableau from '../public/assets/Tableau-Course-Hyderabad.webp'
import Databricks from '../public/assets/Databricks-Training-2.webp'
import PythonFullStack from '../public/assets/python-full-stack.webp'
import BlockChain from '../public/assets/blockchain.webp'
import DotImage from '../public/assets/dots.jpg'

const Cards = () => {
    return (
        <section className='mt-10 flex justify-center flex-col items-center'>
            <div className='flex flex-col md:grid grid-cols-3 gap-x-16 gap-y-20 card'>
                <div ><img src={Tableau} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem] ' height={100} width={100} />

                    <p>Tableau Training</p>
                    <p>We will teach best Tableau course in Hyderabad is that no previous programming experience is required.</p></div>
                <div><img src={PowerBI} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Power BI Training</p>
                    <p>We will help you learn Power BI concepts like Power BI Desktop layouts, BI reports, dashboards etc.,</p>

                </div>
                <div><img src={SnowFlake} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Snowflake Training</p>
                    <p>In this generation snowflake is the one of the best course to learn and it is big cloud warehousing solution</p>
                </div>
                <div><img src={AWS} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>AWS Trainig</p>
                    <p>We designed to make you understand AWS service & Architectural Principles with hands-on experience</p>
                </div>
                <div><img src={AzureData} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Azure Data Factory</p>
                    <p>Sunadh technologies provides Microsoft Azure Data Factory course training in Hyderabad.</p>


                </div>
                <div><img src={Azure} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Microsft Azure Trainig</p>
                    <p>Get started with Microsoft Azure and learn how to create web apps, virtual machines, SQL databases, and more.</p>


                </div>
                <div><img src={FullStack} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Fullstack Development</p>
                    <p>Learn fullstack training in Hyderabad, India. Learn innovative technologies HTML5, CSS3, JavaScript & more!</p>


                </div>
                <div><img src={MuleSoft} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Mulesoft Training</p>
                    <p>We are providing MuleSoft training, it connect all of your applications & data sources, making it easier for you.</p>


                </div>
                <div><img src={Python} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Python Training</p>
                    <p>Sunadh Technologies is a leading Python course training provider/institute in Hyderabad.</p>



                </div>
                <div><img src={DevOps} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>DevOps Training</p>
                    <p>Are you looking for DevOps Training in hyderabad? Sunadh Technologies provides the best training</p>

                </div>
                <div><img src={Salesforce} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Salesforce Trainig</p>
                    <p>Do you want to learn Salesforce? Sunadh Technologies offers the best salesforce CRM training</p>


                </div>
                <div><img src={Databricks} />

                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>DataBricks Training</p>
                    <p>We offer Data Bricks Training in Hyderabad. Our training is designed to help you grow your career.</p>

                </div>
                <div><img src={PythonFullStack} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p></p>
                    <p>Python Full Stack Training </p>
                    <p>Sunadh Technologies provides the Python Full Stack training in Hyderabad with 100% Placement.</p>

                </div>
                <div><img src={mern} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>MERN Full Stack Training</p>
                    <p>Do you want to learn MERN Stack? Sunadh Technologies offers the latest in MERN Full Stack training.</p>


                </div>
                <div><img src={BlockChain} />
                    <img src={DotImage} className='absolute top-[-2rem] right-[-2rem]' height={100} width={100} />
                    <p>Blockchain Training</p>
                    <p>We offer Blockchain Training in Hyderabad. Our training is designed to help you grow your career.</p>
                </div>


            </div>
            <div className='mt-10'>
                <button className=' rounded-full px-5 py-2 text-[#f27c1d] bg-[#f5ba1c9e]'>KNOW MORE</button>
            </div>
        </section>
    )
}

export default Cards