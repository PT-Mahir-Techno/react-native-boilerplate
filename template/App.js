import React from 'react'
import { StatusBar, LogBox, SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import FlashMessage from 'react-native-flash-message'

import AppNavigator from '@/navigator'
import store from '@/store'
import { colors } from '@/constants'
import { axiosInit } from '@/services/init'
import '@/config/uiConfig'

axiosInit()

const queryClient = new QueryClient()

LogBox.ignoreLogs([
  "`new NativeEventEmitter()` was called",
  "EventEmitter.removeListener('change', ...): Method has been deprecated"
])

export default function App () {
  return <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="dark-content"
        />
        <SafeAreaView style={styles.savTop} />
        <SafeAreaView style={styles.savBottom}>
          <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' && 'padding'} 
            style={styles.kav}
          >
            <AppNavigator />
            <FlashMessage />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  </>
}

const styles = StyleSheet.create({
  savTop: { flex: 0, backgroundColor: colors.background },
  savBottom: { flex: 1, backgroundColor: colors.white },
  kav: { flex: 1 }
})