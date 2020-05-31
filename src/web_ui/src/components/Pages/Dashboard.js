import React from 'react';
import Layout from '../Layout/index'
import FarmItem from './DashboardComponents/FarmItem'

export default function Dashboard() {
  return (
    <Layout>
      
    <div id="appDashBoard">
    <FarmItem/>
    </div>
    </Layout>

   );
}


// import PeopleIcon from '@material-ui/icons/People';

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Timer, LocalOffer } from '@material-ui/icons';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { List, ListItem } from '@material-ui/core';
// import ProductSearch from '../common/ProductSearch';
// import Layout from '../Layout';

// import {
//   ShoppingBasket,
//   SupervisedUserCircle,
//   AddAPhoto,
//   QuestionAnswer,
//   PostAdd,
//   Settings,
//   LiveHelp,

// } from '@material-ui/icons';
// import ReportIcon from '@material-ui/icons/Report';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';


// const data = [
//   {
//       title: "Giving",
//       icon: PeopleIcon
//   },
//   {
//       title: "Attendance",
//       icon: ShoppingBasket
//   },
//   {
//       title: "MC Attendance",
//       icon: TrendingUpIcon
//   },
//   {
//       title: "Salvation",
//       icon: ReportIcon
//   }          
// ]



// export default function Album() {
 
//   return (
//     <Layout id="topSearchContainer">

//       <Container>
      
//         <Grid container spacing={4}>
 
//                     {
//                     data.map(it => <Grid item xs={12} sm={6} md={4} lg={3} key={it.title}>
                     
//                      <div>work</div>
//                       </Grid>)
//                    }
  
//         </Grid>
//       </Container>
//     </Layout>
//   );
// }
