import { useState } from 'react';
import biobgimg from '../../assets/New folder/bgimg/allbiobg.jpg';
import Cover from '../Shared folder/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PremiumMember from '../Home/Premium/PremiumMember';
import BiodataCategory from './BiodataCategory/BiodataCategory';
import UseBiodata from '../../Hooks/UseBiodata';
import SectionTitle from '../../Component/SectionTitle';

const AllBiodata = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [premium]=UseBiodata();
    const Medium=premium.filter(bio=>bio.category ==='Medium');
    const Normal=premium.filter(bio=>bio.category ==='Normal');
    return (
        <div>
            
            <Cover  img={biobgimg} title="All Biodata Biodata"  ></Cover><br></br>
          

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Premium</Tab>
                    <Tab>Medium</Tab>
                    <Tab>Normal</Tab>
                </TabList>
                <TabPanel><PremiumMember></PremiumMember></TabPanel>
                <TabPanel>
                <SectionTitle heading="Medium Member"></SectionTitle>
                <BiodataCategory bios={Medium} 
                >

                </BiodataCategory>
                  
                </TabPanel> <TabPanel>
                <SectionTitle heading="Normal Member"></SectionTitle>
                <BiodataCategory bios={Normal} ></BiodataCategory></TabPanel>
              
            </Tabs>
        </div>
    );
};

export default AllBiodata;