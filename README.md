# Music Player (native)

A native music player inspired by Apple Music application built with

- Expo
- React Native
- Typescript
- Zustand

- **Intuitive User Interface:** Sleek and user-friendly design
- **Music Player:** Support for background play and controls.
- **Dynamic Playlists:** Create and manage playlists.
- **Live Updates:** Real-time updates and synchronization.
- **Offline Support:** Play tracks even when you’re offline.
- **Remote Control:** Play tracks even when you’re phone locked.

## SS

## Installation

```bash
yarn install
```

## Run IOS

```bash
npx expo run:ios
```

## Documentation

1 - yarn create expo -t and then select blank(typescript) and give its name

2 - Add .prettierrc file with below settings

```
{
  "semi": false,
  "singleQuote": true
}
```

3 - To make it more readable and remove all ../.. syntax, update tsconfig.json file something like below;

```
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"],
			"@/assets/*": ["./assets/*"]
		}
  }
}
```

4 - Install expo router -> https://docs.expo.dev/router/installation/#prerequisites

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

5 - To compile app locally -> https://docs.expo.dev/guides/local-app-development/

-------------------- First commit --------------------

6 - Create contants, styles, Stack and tabs navigation

7 - Create all layouts and screens for our navigations

-------------------- Second commit --------------------

8 - Use `npx expo install expo-blur` to give blur effects

9 - Add mock data and fallback images

10 - Use `npx expo react-native-fast-image` to render faster/better image

11 - Use `useNavigationSearch` hooks to filter with search params

-------------------- Third commit --------------------

12 - Install track player -> https://rntp.dev/docs/basics/installation

13 - Update app.json / ios section to have audio option

```
  "infoPlist": {
    "UIBackgroundModes": ["audio"]
  }
```

14 - Initialise player and add that to root layer and implement press action to songs to start playing when user click

15 - Use `react-native-loader-kit` to implement loading animation on the image

-------------------- Forth commit --------------------

16 - Install `react-native-reanimated` for floatin text animation on FloatinPlayer and implement that animation

-------------------- Fifth commit --------------------

17 - Create Player screen

18 - Install `react-native-gesture-handler` and `react-native-awesome-slider` for progressbar gestures

19 - Install `react-native-image-colors` and `expo-linear-gradient` for background linear gradient effect

20 - Install `ts-pattern` for The exhaustive Pattern Matching library for TypeScript with smart type inference

-------------------- Sixth commit --------------------

21 - Create Favorites screen

22 - Install `zustand` with version `"^4.5.2"` for state management

23 - Create queues for diffferent tracklists

-------------------- Seventh commit --------------------

24 - Add Play and shuffle buttons to track lists

25 - Implement Artists Screen, list of artists and individual artist screen

-------------------- Eighth commit --------------------

26 - Implement Playlists Screen, list of playlists and individual playlist screen

-------------------- Nineth commit --------------------

27 - Install `@react-native-menu/menu` for PopupMenus

28 - Implement add to playlist feature

29 - Implement add to favorite feature

30 - Implement player remote control

-------------------- Tenth commit --------------------

# Credit

[Build a Music Player app with React Native, Expo, Typescript and Zustand](https://www.youtube.com/watch?v=9CElrkFwiBU)
