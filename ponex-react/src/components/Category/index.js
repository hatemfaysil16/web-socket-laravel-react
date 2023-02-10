import { Routes, Route, useParams } from 'react-router-dom';
import React, {useState} from 'react';
import AboutUs from '../AboutUs';
import Home from '../Home';
import Insurance from '../Insurance';
import ContactUs from '../ContactUs';
import Newsblogs from '../Newsblogs';
import Careers from '../Careers';

function Category(){
    const { slug } = useParams();
    if(slug=='home'){return (<Home/>)}
    if(slug=='insurance'){return (<Insurance/>)}
    if(slug=='about-us'){return (<AboutUs/>)}
    if(slug=='contact-us'){return (<ContactUs/>)}
    if(slug=='news-blogs'){return (<Newsblogs/>)}
    if(slug=='careers'){return (<Careers/>)}
    {return (<Home/>)}
}
export default Category;