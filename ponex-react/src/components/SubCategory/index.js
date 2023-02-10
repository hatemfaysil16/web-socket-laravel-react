import { Routes, Route, useParams } from 'react-router-dom';
import Doctors from '../Doctors';
import Specialties from '../Specialties';
import Physiotherapists from './Physiotherapists';
function SubCategory(){
    let {slug} = useParams();
    let {subslug} = useParams();
    // let {subsubslug} = useParams();
    // console.log(slug+'/'+subslug+'/'+subsubslug);
    if(slug=='our-doctors' && subslug=='doctors'){return (<Doctors/>)}
    if(slug=='our-doctors' && subslug=='physiotherapists'){return (<Physiotherapists/>)}
    if(slug=='specialties' ){return (<Specialties/>)}
    // if(slug=='our-doctors' && subslug=='physiotherapists'  && subslug=='physiotherapists'){return (<Physiotherapists/>)}
}
export default SubCategory;