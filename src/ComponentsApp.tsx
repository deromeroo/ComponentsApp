import 'react-native-gesture-handler';
import React, { PropsWithChildren, useContext } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './presentation/navigator/StackNavigation';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

const AppNavigation = ({children}: PropsWithChildren) => {

  const { isDark } = useContext(ThemeContext)

  return (
    <NavigationContainer
      theme={ 
        isDark ? DarkTheme : DefaultTheme 
      }
    >
      {children}
    </NavigationContainer>
  )
}

const AppTheme = ({children}:PropsWithChildren) => {
  return (
    <ThemeProvider> 
      <AppNavigation>
        { children } 
      </AppNavigation>
    </ThemeProvider>
  )
}


export const ComponentsApp = () => {
  return (
    <AppTheme>
      <StackNavigation />
    </AppTheme>
  );
};
