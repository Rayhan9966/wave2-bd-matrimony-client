import {  Helmet } from 'react-helmet-async';
import Cover from '../Shared folder/Cover/Cover';
import biobgimg from'../../assets/New folder/bio.jpg';
import PremiumMember from '../Home/Premium/PremiumMember';

const Biodata = () => {
    return (
        <div>
<Helmet>
    <title>Bd Matrimony | Bio Data</title>
</Helmet>


<Cover img={biobgimg} title="Biodata"></Cover>



<PremiumMember></PremiumMember>

        </div>
    );
};

export default Biodata;