import React from 'react';
import {StatusBar} from 'react-native';
import Toast, {BaseToastProps, ErrorToast} from 'react-native-toast-message';

const toastConfig = {
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: 'red',
        backgroundColor: 'red',
      }}
      contentContainerStyle={{paddingHorizontal: 10}}
      text1Style={{
        color: '#fff',
      }}
      text2Style={{
        color: '#fff',
      }}
      text2NumberOfLines={4}
    />
  ),
};

const notifiError = (title: string, subtitle?: string) =>
  Toast.show({
    type: 'error',
    text1: title,
    text2: subtitle,
    topOffset: 60,
  });

const withToast = (Component: React.ComponentType) => () =>
  (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#313131" />
      <Component />
      <Toast config={toastConfig} />
    </>
  );

export {withToast, notifiError};
