import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Category from '../components/Category';
import Player from '../components/Player';
import SubCategory from '../components/SubCategory';
import SubSubCategory from '../components/SubSubCategory';
function AppRoute(){
    return (
        <Routes>
            <Route  path="/" element={<Category/>}/>
            <Route  path="/:slug" element={<Category/>}/>
            <Route   path="/:slug/:subslug" element={<SubCategory/>}/>
            <Route   path="/:slug/:subslug/:subsubslug" element={<SubSubCategory/>}/>
            <Route exact path="/showDataPlay" element={<Player/>}/>
        </Routes>
    )
}
export default AppRoute;