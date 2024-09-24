# Documentation

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
      "@/*": ["*"]
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
