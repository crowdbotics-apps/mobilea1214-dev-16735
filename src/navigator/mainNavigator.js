import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315789Navigator from '../features/BlankScreen315789/navigator';
import BlankScreen215758Navigator from '../features/BlankScreen215758/navigator';
import BlankScreen115757Navigator from '../features/BlankScreen115757/navigator';
import BlankScreen015756Navigator from '../features/BlankScreen015756/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315789: { screen: BlankScreen315789Navigator },
BlankScreen215758: { screen: BlankScreen215758Navigator },
BlankScreen115757: { screen: BlankScreen115757Navigator },
BlankScreen015756: { screen: BlankScreen015756Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
