import {  Helmet } from 'react-helmet-async';
import Cover from '../Shared folder/Cover/Cover';
import biobgimg from'../../assets/New folder/bio.jpg';
import PremiumMember from '../Home/Premium/PremiumMember';
import UseBiodata from '../../Hooks/UseBiodata';
import SectionTitle from '../../Component/SectionTitle';
import BiodataCategory from './BiodataCategory/BiodataCategory';

const Biodata = () => {
    const [premium]=UseBiodata();
    const Medium=premium.filter(bio=>bio.category ==='Medium');
    const Normal=premium.filter(bio=>bio.category ==='Normal');
    return (
        <div>
<Helmet>
    <title>Bd Matrimony | Bio Data</title>
</Helmet>


<Cover img={biobgimg} title="Premium Member Biodata"></Cover><br></br>
<PremiumMember></PremiumMember><br></br>
<SectionTitle heading="Medium Member"></SectionTitle>
<BiodataCategory bios={Medium} title={"Medium Member BioData"} img={biobgimg}
>

</BiodataCategory><br></br><br></br>
<SectionTitle heading="Normal Member"></SectionTitle>
<BiodataCategory bios={Normal}  title={"Normal Member BioData"} img={biobgimg}></BiodataCategory>





        </div>
    );
};

export default Biodata;