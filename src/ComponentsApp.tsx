import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigation } from './presentation/navigator/StackNavigation';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  );
};
