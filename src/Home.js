import React from 'react';
import './App.css';
import Sidebar from './comps/Sidebar/Sidebar';
import Feed from './comps/Feed/Feed';
import Widgets from './comps/Widgets/Widgets';
import { motion } from 'framer-motion';



function Home() {

  
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
         
         <div className="app__body">
                
               <Sidebar />  
               <Feed />
               <Widgets />
  
         </div>
          
      </motion.div>
    );
  }

export default Home;
