# News App

Sample News app using react native. tried to do MVVM pattern using costom hooks.

# Features
- News grid
- Shared transition
- Custom Sidebar with nice weather information
- Bookmarking news using SQLite
- Redux for states


# App Description
- The aplication is developed in `expo managed workflow` as it is bit faster to develop and easy to share.
- used `expo-sqlite-sql-helper` package to work with sqlite, which is developed erlier by myself.
- used `redux` for states, `redux-thunk` for async actions.
- MVVM Architecture
  - Model - Redux Reducer - `src/Models`
  - Controllers - Redux Actions - `src/Controllers`
  - View Model - React Hooks - `src/Controllers`
  - View - React Screens - `src/Views`
- used `eact-native-tab-view` for tabs.
- used `react-navigation-shared-element` for image transition.

Expo App link : https://expo.io/@ltsharma/projects/news
